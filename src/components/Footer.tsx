import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-4 md:py-6 text-xs sm:text-sm text-gray-700 border-t lg:text-base f-c-c-c">
      <div className="w-full flex justify-center gap-4 md:gap-8 mb-4 md:mb-6">
        <Link
          href="/introduction"
          className="haewol-darkblue-title hover:haewol-orange-color transition-colors duration-300 font-semibold"
        >
          의원소개
        </Link>
        <div className="w-px bg-gray-300 mx-0"></div>
        <Link
          href="/infoguide"
          className="haewol-darkblue-title hover:haewol-orange-color transition-colors duration-300 font-semibold"
        >
          진료안내
        </Link>
        <div className="w-px bg-gray-300 mx-0"></div>
        <Link
          href="/navigate"
          className="haewol-darkblue-title hover:haewol-orange-color transition-colors duration-300 font-semibold"
        >
          오시는길
        </Link>
      </div>

      <span>상호: 해월씨에스의원 Ι 원장: 한창순 I 번호: 051)710-7090</span>
      <span>
        주소: 부산 해운대구 달맞이길 227(중동 1480-2) I 사업자 등록 번호:
        478-95-00999
      </span>
      <span>
        Copyright &copy; {new Date().getFullYear()} Haewol CS Clinic. All rights
        reserved.
      </span>
    </div>
  );
}
