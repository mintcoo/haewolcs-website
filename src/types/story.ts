import { Timestamp } from "firebase/firestore";

export interface StoryPost {
  id: string;
  title: string;
  content: string;
  isNotice: boolean;
  createdAt: Timestamp;
  postId: string;
}
