import { Metadata } from "next";

export const metadata: Metadata = {
  title: "해월 미리보기",
  description: "해월씨에스 의원의 내부 시설과 외부 전경을 확인하세요.",
};

export default function HaewolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
