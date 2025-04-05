import { StoryPost } from "@/types/story";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
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

// 게시물 상세 가져오기
export const getPostDetail = async (dbName: string, id: string) => {
  try {
    const docRef = doc(db, dbName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        ...data,
        id: docSnap.id,
      };
    } else {
      // 문서가 없는 경우
      return null;
    }
  } catch (error) {
    console.error("Error Get Post:", error);
    return null;
  }
};
