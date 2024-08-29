"use client";

import { useModal } from "@/hooks/useModal";
import { FILE_MAX_SIZE } from "@/lib/constants";
import { useModalStore } from "@/store/useModalStore";
import { useState } from "react";

export default function Edit() {
  const { openModal } = useModal();
  const [fileList, setFileList] = useState<File[]>([]);

  // 이미지 파일 업로드
  const onFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length >= 1) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > FILE_MAX_SIZE) {
          openModal("알림", "5MB 이하의 사진 업로드만 가능합니다.");
          return;
        }
        setFileList((prev) => [...prev, files[i]]);
      }
    }
  };

  const filesUploadStorage = async () => {};
  console.log(fileList);

  return (
    <div className="bg-slate-400 ">
      <input
        onChange={onFilesChange}
        type="file"
        id="file"
        accept="image/*"
        multiple
      ></input>
    </div>
  );
}
