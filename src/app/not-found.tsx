import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4 haewol-darkblue-title">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-lg mb-8">
        죄송합니다. 요청하신 페이지가 존재하지 않습니다.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
