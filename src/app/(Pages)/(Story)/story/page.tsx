"use client";

import SubTitle from "@/components/common/SubTitle";
import TextEditor from "@/components/story/TextEditor";
import { formatDate } from "@/lib/commonClientFnc";
import { authService, db } from "@/lib/firebase";
import { Button } from "@headlessui/react";
import "react-quill/dist/quill.bubble.css";
// import { Metadata } from "next";
import { useEffect, useState } from "react";
import { EPathName, StoryPost } from "@/types/story";
import { usePathname, useRouter } from "next/navigation";
import { getStoryPosts } from "@/services/story/postService";
import Image from "next/image";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const POST_PAGENATION_COUNT = 9; // 페이지당 게시글 수

export default function Story() {
  const path = usePathname();
  const router = useRouter();
  const [pathName, setPathName] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(false);
  const [isOrderMode, setIsOrderMode] = useState<boolean>(false);
  const [storyPosts, setStoryPosts] = useState<StoryPost[]>([]);
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

  const onClickPost = (post: StoryPost, isOrderMode: boolean) => {
    if (isOrderMode) {
      setSelectedPost(post);
      return;
    }
    if (pathName === EPathName.STORY) {
      router.push(`/story/${post.title}/${post.id}`);
    } else {
      router.push(`/story/haewol/${post.title}/${post.id}`);
    }
  };

  // 상태 초기화
  const initState = () => {
    setIsEditorVisible(false);
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

  // 게시글 순서 변경 핸들러
  const handleMovePost = async (direction: "up" | "down") => {
    if (!selectedPost) return;

    const currentPost = selectedPost; // 현재 게시글
    const currentOrder = currentPost.order;

    // 컬렉션 내 가장 큰 order 값 조회
    const querySnapshot = await getDocs(collection(db, pathName));
    let maxOrder = 0;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.order > maxOrder) {
        maxOrder = data.order;
      }
    });

    if (direction === "down" && currentOrder >= maxOrder) return; // 최상단인 경우
    if (direction === "up" && currentOrder <= 1) return; // 최하단인 경우

    // 이동할 위치의 게시글 찾기
    const targetOrder =
      direction === "up" ? currentOrder - 1 : currentOrder + 1;

    // Firestore에서 순서 업데이트
    try {
      // 대상 게시글 찾아서 순서 업데이트
      const q = query(
        collection(db, pathName),
        where("order", "==", targetOrder),
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const targetDoc = querySnapshot.docs[0];
        console.log("targetDoc", targetDoc);
        await updateDoc(doc(db, pathName, targetDoc.id), {
          order: currentOrder,
        });
      }

      // 현재 게시글의 순서 업데이트
      await updateDoc(doc(db, pathName, currentPost.id), {
        order: targetOrder,
      });

      const posts = await getStoryPosts(pathName);

      setStoryPosts(posts);

      // 변경된 순서의 현재 게시글을 찾아서 selectedPost 업데이트
      const updatedPost = posts.find((post) => post.id === currentPost.id);
      if (updatedPost) {
        setSelectedPost(updatedPost);
      }
    } catch (error) {
      console.error("순서 변경 중 오류 발생:", error);
    }
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
  }, [isEditorVisible, pathName]);

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
          <div className="relative w-full flex justify-center">
            <div className="w-full lg:w-3/4 flex flex-col items-end ">
              <>
                {isAdmin && (
                  <div className="flex gap-1">
                    <Button
                      onClick={() => {
                        setIsEditorVisible(true);
                      }}
                      className="btn-white"
                    >
                      글쓰기
                    </Button>
                    <Button
                      onClick={() => {
                        setIsOrderMode(!isOrderMode);
                      }}
                      className="btn-dark-blue px-4 py-1 font-medium"
                    >
                      {isOrderMode ? "조정 종료" : "순서 조정"}
                    </Button>
                  </div>
                )}
                {/* 공지사항 섹션 */}
                <div className="border-t border-b mt-4 w-full bg-gray-50">
                  {storyPosts
                    .filter((post) => post.isNotice)
                    .map((post, index) => (
                      <div
                        onClick={() => onClickPost(post, isOrderMode)}
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
                        onClick={() => onClickPost(post, isOrderMode)}
                        key={index}
                        className={`${isOrderMode && selectedPost?.id === post.id ? "bg-blue-100 hover:bg-blue-100 border border-blue-600" : ""} bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:text-orange-400 text-gray-800  transition-shadow duration-150 cursor-pointer overflow-hidden`}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
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
                        onClick={() => onClickPost(post, isOrderMode)}
                        key={index}
                        className={`${isOrderMode && selectedPost?.id === post.id ? "bg-blue-100 hover:bg-blue-100" : ""} flex justify-between items-center px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group`}
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
            </div>

            <div
              className={`${isOrderMode ? "" : "invisible"} fixed right-2 top-3/5 md:absolute  md:right-10 md:top-1/2 -translate-y-1/2 flex items-center`}
            >
              <div className="flex flex-col gap-2 md:gap-4">
                <button
                  onClick={() => handleMovePost("up")}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="위로 이동"
                >
                  <KeyboardArrowUp className="w-6 h-6 md:w-12 md:h-12" />
                </button>
                <button
                  onClick={() => handleMovePost("down")}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="아래로 이동"
                >
                  <KeyboardArrowDown className="w-6 h-6 md:w-12 md:h-12" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
