import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { StoryPost } from "@/types/story";
import { formatDate } from "@/lib/commonClientFnc";
import { Button } from "@headlessui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useModal } from "@/hooks/useModal";

interface ITextViewerProps {
  selectedPost: StoryPost | null;
  isAdmin: boolean;
  setIsShowPost: (isShowPost: boolean) => void;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextViewer({
  selectedPost,
  isAdmin,
  setIsShowPost,
}: ITextViewerProps) {
  const { openModal } = useModal();
  // 게시글 삭제
  const onDeletePost = async () => {
    console.log("삭제", selectedPost);
    try {
      if (selectedPost) {
        await deleteDoc(doc(db, "posts", selectedPost.id));
        setIsShowPost(false);
        openModal("알림", "게시글이 삭제되었습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full flex flex-col items-end">
      <div className="flex justify-between w-full gap-1">
        <Button
          onClick={() => {
            setIsShowPost(false);
          }}
          className="btn-white px-6 py-1"
        >
          목록
        </Button>
        {isAdmin && (
          <div className="flex gap-1">
            <Button onClick={() => {}} className="btn-dark-blue px-6 py-1">
              수정
            </Button>
            <Button onClick={onDeletePost} className="btn-red px-6 py-1">
              삭제
            </Button>
          </div>
        )}
      </div>
      <div className="w-full mt-4 border-t border-b">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between">
          <h1 className="text-xl font-medium text-gray-800">
            {selectedPost?.title}
          </h1>
          <div className="mt-2 text-sm text-gray-500">
            {selectedPost?.createdAt ? formatDate(selectedPost?.createdAt) : ""}
          </div>
        </div>
        <div className="px-6 py-6 whitespace-pre-wrap text-gray-700 min-h-[200px]">
          <ReactQuill
            value={selectedPost?.content || ""}
            readOnly={true}
            theme="bubble"
            modules={{
              toolbar: false,
            }}
            className="px-6 py-6 text-gray-700 min-h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}
