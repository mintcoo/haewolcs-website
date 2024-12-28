"use client";

import SubTitle from "@/components/common/SubTitle";
import TextEditor from "@/components/story/TextEditor";
import { Button } from "@headlessui/react";
// import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "해월이야기",
// };

export default function InfoGuide() {
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(false);
  const [value, setValue] = useState("");

  console.log(value, "밸류");
  return (
    <div className="contents-layout">
      {isEditorVisible ? (
        <TextEditor onCallbackDone={() => setIsEditorVisible(false)} />
      ) : (
        <>
          <div className="sub-menu-title">해월이야기</div>
          <div className="sub-menu-title-bar"></div>
          <SubTitle title="도란도란" />
          <Button
            onClick={() => {
              setIsEditorVisible(true);
            }}
            className="btn-white px-7 py-1"
          >
            글쓰기
          </Button>
        </>
      )}
    </div>
  );
}
