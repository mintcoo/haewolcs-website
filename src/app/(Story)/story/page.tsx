"use client";

import SubTitle from "@/components/common/SubTitle";
import TextEditor from "@/components/story/TextEditor";
import { formatDate } from "@/lib/commonClientFnc";
import { authService, db } from "@/lib/firebase";
import { Button } from "@headlessui/react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "react-quill/dist/quill.bubble.css";
// import { Metadata } from "next";
import { useEffect, useState } from "react";
import { StoryPost } from "@/types/story";
import TextViewer from "@/components/story/TextViewer";

// export const metadata: Metadata = {
//   title: "해월이야기",
// };

export default function Story() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(false);
  const [isShowPost, setIsShowPost] = useState<boolean>(false);
  const [storyPosts, setStoryPosts] = useState<StoryPost[]>([]);
  // 상세보기용 선택한 게시물
  const [selectedPost, setSelectedPost] = useState<StoryPost | null>(null);

  // 게시물들 받아와서 세팅
  const getPosts = async () => {
    let posts: StoryPost[] = [];
    const postQuery = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc"),
    );

    const querySnapshot = await getDocs(postQuery);
    querySnapshot.forEach((doc) => {
      const { title, content, createdAt, isNotice } = doc.data();
      posts.push({ title, content, createdAt, id: doc.id, isNotice });
    });

    setStoryPosts(posts);
  };

  const onClickPost = (post: StoryPost) => {
    setSelectedPost(post);
    setIsShowPost(true);
  };

  // 게시글 수정
  const onEditPost = () => {
    setIsEditorVisible(true);
  };

  // 상태 초기화
  const initState = () => {
    setIsEditorVisible(false);
    setIsShowPost(false);
    setSelectedPost(null);
  };

  // 게시글 리스트 갱신
  useEffect(() => {
    // 에디터 안보이면 새로갱신
    if (!isEditorVisible) {
      getPosts();
    }
  }, [isEditorVisible, isShowPost]);

  useEffect(() => {
    // 유저가 로그인 여부 체크
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

  return (
    <div className="contents-layout">
      {isEditorVisible ? (
        <TextEditor
          selectedPost={selectedPost}
          onCallbackDone={() => {
            initState();
          }}
        />
      ) : (
        <>
          <div className="sub-menu-title">해월이야기</div>
          <div className="sub-menu-title-bar"></div>
          <SubTitle title="도란도란" />
          <div className="w-full lg:w-2/3 flex flex-col items-end ">
            {isShowPost ? (
              <>
                <TextViewer
                  selectedPost={selectedPost}
                  isAdmin={isAdmin}
                  initState={initState}
                  onEditPost={onEditPost}
                />
              </>
            ) : (
              <>
                {isAdmin && (
                  <Button
                    onClick={() => {
                      setIsEditorVisible(true);
                    }}
                    className="btn-white px-6 py-1"
                  >
                    글쓰기
                  </Button>
                )}
                {/* 공지사항 섹션 */}
                <div className="border-t border-b mt-4 w-full bg-gray-50">
                  {storyPosts
                    .filter((post) => post.isNotice)
                    .map((post, index) => (
                      <div
                        onClick={() => onClickPost(post)}
                        key={`notice-${index}`}
                        className="flex justify-between items-center px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-xs font-medium haewol-darkblue-title w-8">
                            ★
                          </span>
                          <h2 className="text-base font-medium text-gray-800 group-hover:haewol-orange-color transition-colors duration-200">
                            {post.title}
                          </h2>
                        </div>
                      </div>
                    ))}
                </div>
                {/* 게시글 리스트 */}
                <div className="border-t border-b w-full">
                  {storyPosts.map((post, index) => (
                    <div
                      onClick={() => onClickPost(post)}
                      key={index}
                      className="flex justify-between items-center px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-400 w-8">
                          {index + 1}
                        </span>
                        <h2 className="text-base font-medium text-gray-800 group-hover:haewol-orange-color transition-colors duration-200">
                          {post.title}
                        </h2>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
