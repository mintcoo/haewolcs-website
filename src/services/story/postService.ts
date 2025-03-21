import { StoryPost } from "@/types/story";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "@/lib/firebase";

// 게시물들 받아와서 세팅
export const getStoryPosts = async (dbName: string) => {
  let posts: StoryPost[] = [];
  const postQuery = query(collection(db, dbName), orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(postQuery);
  querySnapshot.forEach((doc) => {
    const { title, content, createdAt, isNotice, postId } = doc.data();
    posts.push({ title, content, createdAt, id: doc.id, isNotice, postId });
  });

  return posts;
};
