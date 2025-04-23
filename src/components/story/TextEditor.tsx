import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { useModal } from "@/hooks/useModal";
import ReactQuill, { ReactQuillProps } from "react-quill";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { compressImage } from "@/lib/commonClientFnc";
import { EPathName, StoryPost } from "@/types/story";
import { Button } from "@headlessui/react";
import VideoLinkModal from "../common/VideoLinkModal";

interface ITextEditorProps {
  selectedPost?: StoryPost | null;
  onCallbackDone: () => void;
  pathName: string;
}

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface CustomReactQuillProps extends ReactQuillProps {
  forwardedRef: React.RefObject<ReactQuill>;
}

// 이미지 ref 연결을 위해 커스텀 컴포넌트 생성
const CustomReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    const Quill = ({ forwardedRef, ...props }: CustomReactQuillProps) => (
      <RQ ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  { ssr: false },
);

export default function TextEditor({
  onCallbackDone,
  selectedPost,
  pathName,
}: ITextEditorProps) {
  const { openModal } = useModal();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isNotice, setIsNotice] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  // 저장된 게시글 id (이미지 폴더 루트)
  const [savedPostId, setSavedPostId] = useState<string>("");
  const [showLinkVideoModal, setShowLinkVideoModal] = useState<boolean>(false);
  const quillRef = useRef<ReactQuill>(null);

  const savedPostIdRef = useRef("");

  const handleSave = async () => {
    try {
      if (!title.trim() || !content.trim()) {
        openModal("알림", "제목과 내용을 모두 입력해주세요.");
        return;
      }

      if (isEditMode) {
        await updateDoc(doc(db, pathName, selectedPost!.id), {
          title,
          content,
          isNotice,
        });
      } else {
        // 컬렉션 내 가장 큰 order 값 조회
        const querySnapshot = await getDocs(collection(db, pathName));
        let maxOrder = 0;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.order > maxOrder) {
            maxOrder = data.order;
          }
        });

        await addDoc(collection(db, pathName), {
          title,
          content,
          isNotice,
          createdAt: serverTimestamp(),
          postId: savedPostId,
          order: maxOrder + 1,
        });
      }
      openModal("알림", "저장되었습니다!");
      setSavedPostId("");
      onCallbackDone();
    } catch (error) {
      openModal("알림", "저장에 실패했습니다.");
    }
  };

  const handleImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      // 이미지 리사이징 압축
      const compressedFile = await compressImage(file, 0.2, 1280, 0.8);
      const editor = quillRef.current!.getEditor();
      // 현재 커서 위치 가져오기
      const range = editor.getSelection(true);

      // 로딩 이미지 표시
      editor.insertEmbed(range.index, "image", `/images/loading.gif`);

      if (compressedFile) {
        try {
          const fileName = `${Date.now()}-${file.name}`;
          const storageRef = ref(
            storage,
            `posts/${savedPostIdRef.current}/${fileName}`,
          );
          await uploadBytes(storageRef, compressedFile);
          const url = await getDownloadURL(storageRef);

          editor.deleteText(range.index, 1); // 로딩 이미지 제거
          editor.insertEmbed(range.index, "image", url);
        } catch (error) {
          openModal("알림", "이미지 업로드에 실패했습니다.");
        }
      }
    };
  };

  // 비디오 링크 업로드용 모달
  const openLinkVideoModal = () => {
    setShowLinkVideoModal(true);
  };

  const handleVideo = (embedVideoHTML: string) => {
    const editor = quillRef.current!.getEditor();
    // 현재 커서 위치 가져오기
    const range = editor.getSelection(true);
    // 클립보드에 비디오 Embed HTML 삽입
    editor.clipboard.dangerouslyPasteHTML(range.index, embedVideoHTML);
    // 커서 위치 조정
    editor.setSelection({ index: range.index + 1, length: 0 });
  };

  const handleAudio = () => {
    // @@@@@@@@ 여기서부터 해봐야함 파이어베이스에 올리고 가져오기
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "audio/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const editor = quillRef.current!.getEditor();
      const range = editor.getSelection(true);

      // 여기에 오디오 파일 업로드 및 삽입 로직을 구현하세요
      // 예시:
      editor.insertEmbed(range.index, "audio", "오디오 URL");
    };
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }], // 폰트 종류
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }], // 글자색, 배경색
          [{ align: [] }], // 정렬
          ["image"],
          ["video"],
          ["link"],
        ],
        handlers: {
          image: handleImage,
          video: openLinkVideoModal,
          link: handleAudio,
        },
      },
    };
  }, []);

  // 수정 모드로 들어와서 선택된 게시글이 있을 때
  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
      setIsNotice(selectedPost.isNotice);
      setIsEditMode(true);
    }
  }, [selectedPost]);

  useEffect(() => {
    const now = new Date();
    // 한국 시간으로 조정 (UTC+9)
    now.setHours(now.getHours() + 9);

    const postId = now
      .toISOString()
      .slice(0, 19)
      .replace("T", "_")
      .replace(/[-:]/g, "");
    setSavedPostId(postId);
    // handleImage 함수가 컴포넌트 형성전에 만들어져서 따로 관리
    savedPostIdRef.current = selectedPost?.postId || postId;
  }, []);

  return (
    <>
      {showLinkVideoModal && (
        <VideoLinkModal
          showVideoLinkModal={showLinkVideoModal}
          setShowVideoLinkModal={setShowLinkVideoModal}
          onClickOk={(embedVideoHTML) => {
            handleVideo(embedVideoHTML);
            setShowLinkVideoModal(false);
          }}
        />
      )}
      <div className="w-full h-full lg:w-2/3 f-c-c-c">
        <div className="w-full flex flex-col md:flex-row gap-1 mb-2 md:mb-5 ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="flex-1 px-4 py-1 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div
            className={`flex items-center gap-2 mx-2 ${pathName === EPathName.STORY ? "hidden" : ""}`}
          >
            <input
              type="checkbox"
              id="notice"
              checked={isNotice}
              onChange={(e) => setIsNotice(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="notice" className={`text-sm`}>
              공지
            </label>
          </div>
          <div className="flex justify-end gap-1">
            <Button
              onClick={async () => {
                // 이미지 폴더 내 모든 파일 삭제
                if (!isEditMode) {
                  const folderRef = ref(storage, `posts/${savedPostId}`);
                  const fileList = await listAll(folderRef);
                  await Promise.all(
                    fileList.items.map((fileRef) => deleteObject(fileRef)),
                  );
                }

                onCallbackDone();
              }}
              className="rounded-md btn-white"
            >
              취소
            </Button>
            {/* 저장 버튼 */}
            <Button onClick={handleSave} className="rounded-md btn-dark-blue">
              저장하기
            </Button>
          </div>
        </div>
        <CustomReactQuill
          forwardedRef={quillRef}
          value={content}
          onChange={setContent}
          theme="snow"
          className="w-full h-[50vh] mb-5"
          placeholder="내용을 입력해주세요."
          modules={modules}
        />
      </div>
    </>
  );
}
