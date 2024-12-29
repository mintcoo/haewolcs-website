import imageCompression from "browser-image-compression";
import { Timestamp } from "firebase/firestore";

// 이미지 압축
export const compressImage = async (file: File) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  return await imageCompression(file, options);
};

// 날짜 포맷팅
export const formatDate = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  const now = new Date();

  // 한국 시간 기준으로 날짜 비교를 위해 날짜만 추출
  const koreaDate = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
  );
  const koreaToday = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
  );

  // 날짜만 비교하기 위해 시간을 00:00:00으로 설정
  const dateOnly = new Date(
    koreaDate.getFullYear(),
    koreaDate.getMonth(),
    koreaDate.getDate(),
  );
  const todayOnly = new Date(
    koreaToday.getFullYear(),
    koreaToday.getMonth(),
    koreaToday.getDate(),
  );

  const diffTime = Math.abs(todayOnly.getTime() - dateOnly.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 오늘인 경우
  if (diffDays === 0) {
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  // 그 외의 경우
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
