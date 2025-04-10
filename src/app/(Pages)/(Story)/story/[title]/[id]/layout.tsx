import NotFound from "@/app/not-found";
import { getPostDetail } from "@/services/story/postService";
import { EPathName, StoryPost } from "@/types/story";

// 동적 메타데이터
export async function generateMetadata({ params }: { params: { id: string } }) {
  const PATH_NAME = EPathName.STORY;
  const post = (await getPostDetail(PATH_NAME, params.id)) as StoryPost;

  if (!post) return NotFound();

  return {
    title: post.title,
  };
}

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
