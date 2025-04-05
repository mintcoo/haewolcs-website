import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { StoryPost } from "@/types/story";
import { formatDate } from "@/lib/commonClientFnc";
import { Button } from "@headlessui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { useModal } from "@/hooks/useModal";
import { deleteObject, listAll, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
interface ITextViewerProps {
  selectedPost: StoryPost | null;
  isAdmin: boolean;
  pathName: string;
  onEditPost: () => void;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextViewer({
  selectedPost,
  isAdmin,
  pathName,
  onEditPost,
}: ITextViewerProps) {
  const router = useRouter();
  const { openModal } = useModal();

  // 게시글 삭제
  const onDeletePost = async () => {
    openModal("알림", "게시글을 삭제하시겠습니까?", async () => {
      try {
        if (selectedPost) {
          await deleteDoc(doc(db, pathName, selectedPost.id));
          if (selectedPost.postId) {
            // 이미지 폴더 내 모든 파일 삭제
            const folderRef = ref(storage, `posts/${selectedPost.postId}`);
            const fileList = await listAll(folderRef);
            await Promise.all(
              fileList.items.map((fileRef) => deleteObject(fileRef)),
            );
          }
          openModal("알림", "게시글이 삭제되었습니다.");
          router.push("/story");
        }
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-end mt-4 md:mt-6">
      <div className="flex justify-between w-full gap-1">
        <Button
          onClick={() => {
            router.push("/story");
          }}
          className="btn-white"
        >
          목록
        </Button>
        {isAdmin && (
          <div className="flex gap-1">
            <Button onClick={onEditPost} className="btn-dark-blue">
              수정
            </Button>
            <Button onClick={onDeletePost} className="btn-red">
              삭제
            </Button>
          </div>
        )}
      </div>
      <div className="w-full mt-4 border-t border-b">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between">
          <h1 className="story-text-size font-medium text-gray-800">
            {selectedPost?.title}
          </h1>
          <div className="mt-2 text-sm md:text-sm text-gray-500">
            {selectedPost?.createdAt ? formatDate(selectedPost?.createdAt) : ""}
          </div>
        </div>
        <div className="md:px-6 md:py-6 whitespace-pre-wrap text-gray-700 min-h-[200px]">
          <ReactQuill
            value={selectedPost?.content || ""}
            readOnly={true}
            theme="bubble"
            modules={{
              toolbar: false,
            }}
            className="md:px-6 md:py-6 text-gray-700 min-h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}
