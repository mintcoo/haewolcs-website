import { Metadata } from "next";

export const metadata: Metadata = {
  title: "환우들과 함께",
  description: "해월씨에스 의원에서 환우들과 함께하는 이야기를 나눕니다.",
  openGraph: {
    title: "환우들과 함께",
    description: "해월씨에스 의원에서 환우들과 함께하는 이야기를 나눕니다.",
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
