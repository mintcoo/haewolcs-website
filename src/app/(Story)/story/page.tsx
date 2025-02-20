"use client";

import SubTitle from "@/components/common/SubTitle";
import TextEditor from "@/components/story/TextEditor";
import { formatDate } from "@/lib/commonClientFnc";
import { authService } from "@/lib/firebase";
import { Button } from "@headlessui/react";
import "react-quill/dist/quill.bubble.css";
// import { Metadata } from "next";
import { useEffect, useState } from "react";
import { StoryPost } from "@/types/story";
import TextViewer from "@/components/story/TextViewer";
import { usePathname } from "next/navigation";
import { getStoryPosts } from "@/services/story/postService";
import Image from "next/image";

export enum EPathName {
  STORY = "story",
  HAEWOL = "haewol",
}

const POST_PAGENATION_COUNT = 9; // 페이지당 게시글 수

export default function Story() {
  const path = usePathname();
  const [pathName, setPathName] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(false);
  const [isShowPost, setIsShowPost] = useState<boolean>(false);
  const [storyPosts, setStoryPosts] = useState<StoryPost[]>([]);
  // 상세보기용 선택한 게시물
  const [selectedPost, setSelectedPost] = useState<StoryPost | null>(null);
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 페이지네이션 계산
  const lastIndex = currentPage * POST_PAGENATION_COUNT;
  const firstIndex = lastIndex - POST_PAGENATION_COUNT;
  const filteredPosts = storyPosts
    .filter((post) => !post.isNotice)
    .slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(
    storyPosts.filter((post) => !post.isNotice).length / POST_PAGENATION_COUNT,
  );

  // 게시물들 받아와서 세팅
  const getPosts = async (dbName: string) => {
    const posts = await getStoryPosts(dbName);

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

  // 첫 번째 이미지 URL 추출
  const extractFirstImageUrl = (content: string): string => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : "/images/therapies/antioxidant.jpg";
  };

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 게시글 리스트 갱신
  useEffect(() => {
    // 에디터 안보이면 새로갱신
    if (!isEditorVisible) {
      if (pathName === EPathName.STORY) {
        getPosts(EPathName.STORY);
      } else {
        getPosts(EPathName.HAEWOL);
      }
    }
  }, [isEditorVisible, isShowPost, pathName]);

  useEffect(() => {
    if (path === "/story") {
      setPathName(EPathName.STORY);
    } else {
      setPathName(EPathName.HAEWOL);
    }
  }, [path]);

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
          pathName={pathName}
          onCallbackDone={() => {
            initState();
          }}
        />
      ) : (
        <>
          <div className="sub-menu-title">해월이야기</div>
          <div className="sub-menu-title-bar"></div>
          <SubTitle
            title={`${pathName === EPathName.STORY ? "환우들과 함께" : "도란도란"}`}
          />
          <div className="w-full lg:w-2/3 flex flex-col items-end ">
            {isShowPost ? (
              <>
                <TextViewer
                  selectedPost={selectedPost}
                  pathName={pathName}
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
                {pathName === EPathName.STORY ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
                    {filteredPosts.map((post, index) => (
                      <div
                        onClick={() => onClickPost(post)}
                        key={index}
                        className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:text-orange-400 text-gray-800  transition-shadow duration-150 cursor-pointer overflow-hidden"
                      >
                        <div className="relative h-[20vh] w-full overflow-hidden">
                          <Image
                            src={extractFirstImageUrl(post.content)}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h2 className="text-lg font-medium mb-2 line-clamp-2 ">
                            {post.title}
                          </h2>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>{formatDate(post.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border-t border-b w-full">
                    {filteredPosts.map((post, index) => (
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
                )}
                {/* 페이지네이션 UI */}
                <div className="flex w-full justify-center gap-4 mt-8">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`${
                          currentPage === pageNum
                            ? "text-lg font-bold"
                            : "text-base text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ),
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
