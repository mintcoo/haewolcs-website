import NotFound from "@/app/not-found";
import { getPostDetail } from "@/services/story/postService";
import { EPathName, StoryPost } from "@/types/story";

// 동적 메타데이터
export async function generateMetadata({ params }: { params: { id: string } }) {
  const PATH_NAME = EPathName.HAEWOL;
  const post = (await getPostDetail(PATH_NAME, params.id)) as StoryPost;

  if (!post) return NotFound();

  return {
    title: post.title,
    description: post.content.slice(0, 30), // 첫 160자를 설명으로
  };
}

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
