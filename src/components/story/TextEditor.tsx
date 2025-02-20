import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { useModal } from "@/hooks/useModal";
import ReactQuill, { ReactQuillProps } from "react-quill";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { compressImage } from "@/lib/commonClientFnc";
import { StoryPost } from "@/types/story";

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
  const quillRef = useRef<ReactQuill>(null);

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
        await addDoc(collection(db, pathName), {
          title,
          content,
          isNotice,
          createdAt: serverTimestamp(),
          // author: '작성자 정보',
          // userId: '사용자ID',
        });
      }
      openModal("알림", "저장되었습니다!");
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
      const compressedFile = await compressImage(file);
      const editor = quillRef.current!.getEditor();
      // 현재 커서 위치 가져오기
      const range = editor.getSelection(true);

      // 로딩 이미지 표시
      editor.insertEmbed(range.index, "image", `/images/loading.gif`);

      if (compressedFile) {
        try {
          const fileName = `${Date.now()}-${file.name}`;
          const storageRef = ref(storage, `posts/${fileName}`);
          await uploadBytes(storageRef, file);
          const url = await getDownloadURL(storageRef);

          editor.deleteText(range.index, 1); // 로딩 이미지 제거
          editor.insertEmbed(range.index, "image", url);
        } catch (error) {
          openModal("알림", "이미지 업로드에 실패했습니다.");
        }
      }
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
        ],
        handlers: {
          image: handleImage,
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

  return (
    <div className="w-full h-full lg:w-2/3 f-c-c-c">
      <div className="w-full flex gap-1 mb-5 ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="flex-1 px-4 py-1 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="flex items-center gap-2 mx-2">
          <input
            type="checkbox"
            id="notice"
            checked={isNotice}
            onChange={(e) => setIsNotice(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="notice" className="text-sm">
            공지
          </label>
        </div>
        <button
          onClick={onCallbackDone}
          className="px-6 py-1 rounded-md btn-white"
        >
          취소
        </button>
        {/* 저장 버튼 */}
        <button
          onClick={handleSave}
          className="px-6 py-1 rounded-md btn-dark-blue"
        >
          저장하기
        </button>
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
  );
}
