"use client";

import TextEditor from "@/components/story/TextEditor";
import TextViewer from "@/components/story/TextViewer";
import { getPostDetail } from "@/services/story/postService";
import { StoryPost } from "@/types/story";
import { useEffect, useState } from "react";

// 동적 메타데이터
// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const post = await getStoryPost(params.id);

//   if (!post) return notFound();

//   return {
//     title: post.title,
//     description: post.content.slice(0, 30), // 첫 160자를 설명으로
//   };
// }

interface PostDetailProps {
  params: { id: string };
}

export default function PostDetail(props: PostDetailProps) {
  const { params } = props;
  const PATH_NAME = "story";
  const [post, setPost] = useState<StoryPost | null>(null);
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(false);

  const getPost = async () => {
    const post = await getPostDetail(PATH_NAME, params.id);
    setPost(post as StoryPost);
  };

  // 상태 초기화
  const handleEditPost = () => {
    setIsEditorVisible(false);
  };
  // 게시글 수정
  const onEditPost = () => {
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
            handleEditPost();
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
              onEditPost={onEditPost}
            />
          </div>
        </>
      )}
    </div>
  );
}
