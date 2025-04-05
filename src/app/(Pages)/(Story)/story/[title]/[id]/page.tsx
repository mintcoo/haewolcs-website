"use client";

import TextEditor from "@/components/story/TextEditor";
import TextViewer from "@/components/story/TextViewer";
import { getPostDetail } from "@/services/story/postService";
import { EPathName, StoryPost } from "@/types/story";
import { useEffect, useState } from "react";

interface IStoryPostDetailProps {
  params: { id: string };
}

export default function StoryPostDetail(props: IStoryPostDetailProps) {
  const { params } = props;
  const PATH_NAME = EPathName.STORY;
  const [post, setPost] = useState<StoryPost | null>(null);
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(false);

  const getPost = async () => {
    const post = await getPostDetail(PATH_NAME, params.id);
    setPost(post as StoryPost);
  };

  // 게시글 수정 닫기
  const closeEditor = () => {
    setIsEditorVisible(false);
    getPost();
  };
  // 게시글 수정 열기
  const openEditor = () => {
    setIsEditorVisible(true);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="contents-layout">
      {isEditorVisible ? (
        <TextEditor
          selectedPost={post}
          pathName={PATH_NAME}
          onCallbackDone={() => {
            closeEditor();
          }}
        />
      ) : (
        <>
          <div className="sub-menu-title">해월이야기</div>
          <div className="sub-menu-title-bar"></div>
          <div className="w-full lg:w-4/5 flex flex-col items-end ">
            <TextViewer
              selectedPost={post}
              pathName={PATH_NAME}
              isAdmin={true}
              onEditPost={openEditor}
            />
          </div>
        </>
      )}
    </div>
  );
}
