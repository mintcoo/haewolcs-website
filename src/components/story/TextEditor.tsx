import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useModal } from "@/hooks/useModal";

interface ITextEditorProps {
  onCallbackDone: () => void;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditor({ onCallbackDone }: ITextEditorProps) {
  const { openModal } = useModal();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    try {
      if (!title.trim() || !content.trim()) {
        openModal("알림", "제목과 내용을 모두 입력해주세요.");
        return;
      }

      const docRef = await addDoc(collection(db, "posts"), {
        title,
        content,
        createdAt: serverTimestamp(),
        // author: '작성자 정보',
        // userId: '사용자ID',
      });

      openModal("알림", "저장되었습니다!");
      onCallbackDone();
    } catch (error) {
      openModal("알림", "저장에 실패했습니다.");
    }
  };

  return (
    <div className="w-full h-full lg:w-2/3 f-c-c-c">
      <div className="w-full flex gap-2 mb-5 ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="flex-1 px-4 py-2 text-xl border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {/* 저장 버튼 */}
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md btn-dark-blue"
        >
          저장하기
        </button>
      </div>
      <ReactQuill
        value={content}
        onChange={setContent}
        theme="snow"
        className="w-full h-[50vh] mb-5"
        placeholder="내용을 입력해주세요."
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }], // 폰트 종류
              ["bold", "italic", "underline", "strike"],
              [{ color: [] }, { background: [] }], // 글자색, 배경색
              [{ align: [] }], // 정렬
              ["image"],
            ],
          },
        }}
      />
    </div>
  );
}
