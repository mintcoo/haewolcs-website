import NotFound from "@/app/not-found";
import { getPostDetail } from "@/services/story/postService";
import { EPathName, StoryPost } from "@/types/story";

// 동적 메타데이터
export async function generateMetadata({ params }: { params: { id: string } }) {
  const PATH_NAME = EPathName.STORY;
  const post = (await getPostDetail(PATH_NAME, params.id)) as StoryPost;

  if (!post) return NotFound();
  const plainText = post.content
    .replace(/<[^>]*>/g, "") // HTML 태그 제거
    .replace(/&lt;/g, "<") // HTML 엔티티 디코딩
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ") // 연속된 공백 제거
    .trim(); // 앞뒤 공백 제거

  return {
    title: post.title,
    description: plainText.slice(0, 80),
  };
}

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
