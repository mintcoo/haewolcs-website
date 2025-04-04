import { Metadata } from "next";

export const metadata: Metadata = {
  title: "의원 소개",
};

export default function Introduction() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">의원 소개</div>
      <div className="sub-menu-title-bar"></div>
      <div className="w-full flex justify-center">
        <div className="text-contents-color tracking-tight leading-relaxed text-center">
          <div className="text-lg sm:text-xl md:text-2xl haewol-darkblue-title">
            안녕하세요.
          </div>
          <div className="text-lg sm:text-xl md:text-2xl haewol-darkblue-title">
            부산 해운대구 달맞이길
          </div>
          <span className="font-semibold text-lg sm:text-xl md:text-2xl haewol-darkblue-title">
            해월씨에스 의원 원장 한창순
          </span>
          <span className="text-lg sm:text-xl md:text-2xl haewol-darkblue-title">
            입니다.
          </span>
          <p className="whitespace-pre-line my-8">
            {`혈액종양내과 전문의로서 주로 항암치료를 전담하였으며, 
            최근 암 통합치료 중점 병원에서 암에 대한 통합치료를 전담하였습니다.`}
          </p>
          <p className="whitespace-pre-line">
            {`“해월 씨에스 의원”은 29 병상의 작은 의원으로 
1층 주차장 위로 3,4 층은 병실, 간호사실, 주사실, 물리치료실이 있고, 
5층은 원무과, 진료실, 고주파온열치료실, 1인실, 주방과 식당이 있습니다.
병실은 `}
            <strong className="haewol-darkblue-title font-semibold">
              4인실 (5실), 3인실 (2실), 2인실 (1실)과 1인실 (1실){" "}
            </strong>
            이 있으며,
            <br />
            {`수술 후, 항암 치료, 방사선 치료 전후에 `}
            <strong className="haewol-darkblue-title font-semibold">
              장기 및 단기 입원과 외래 치료가 가능하며,
            </strong>
            {`
항암 치료 부작용 관리와 
아래 열거한 암 통합치료를 받으실 수 있습니다.`}
          </p>
          <br />
          <p className="whitespace-pre-line">
            {`온코써미아를 이용한`}{" "}
            <strong className="haewol-orange-color font-semibold">
              고주파 온열치료
            </strong>
            {`, 
면역증강치료로 `}{" "}
            <strong className="haewol-darkblue-title font-semibold">
              싸이모신 알파원
            </strong>{" "}
            <strong className="haewol-orange-color font-semibold">
              (헤리, 자닥신, 휴닥신)
            </strong>
            {`  주사 및`}
            <br />
            <strong className="haewol-darkblue-title font-semibold">
              미슬토제제
            </strong>
            {`로 `}
            <strong className="haewol-orange-color font-semibold">
              압노바, 이스카도, 헬릭소
            </strong>
            {` 주사,
면역항암제로 `}
            <strong className="haewol-orange-color font-semibold">
              이뮤코텔, 메시마,
            </strong>
            {`
녹십자와 연계하여 `}
            <strong className="haewol-orange-color font-semibold">
              이뮨셀
            </strong>
            {` 주사,
항산화치료로 `}
            <strong className="haewol-orange-color font-semibold">
              셀레늄, 글루타치온, 치옥트산
            </strong>
            {` 주사 및 ​
암에 대한 직접 치료로 `}
            <strong className="haewol-orange-color font-semibold">
              고용량 비타민 C 요법
            </strong>
            {` 등을 시행하며, 
이에 대한 자세한 설명은 “암 통합치료” 난에 기재되어 있습니다.
그 외에 `}
            <strong className="haewol-orange-color font-semibold">
              비타민 D, 마이어스 칵테일, 푸르설티아민, 징크
            </strong>
            {` 등 미네랄과 비타민 공급, 
아미노산, 콤비플렉스 등의 영양 수액제 처방이 가능합니다.`}
          </p>
          <br />
          <p className="whitespace-pre-line">
            {`고주파온열치료 기계는 `}
            <strong className="text-blue-600 font-semibold">
              Oncothermia EHY-2000 PLUS
            </strong>
            {`를 도입하였으며 
모든 주사제의 조제는 `}
            <strong className="text-blue-600 font-semibold">
              무균조제 부스
            </strong>
            {`에서 시행하고 있습니다.
 `}
            <strong className="text-blue-600 font-semibold">온열 물침대</strong>
            {`가 구비되어 있으며, 
반신욕기와 런닝머신은 바다가 보이는 베란다에 설치되어 있어 
달맞이길의 문탠로드를 따라 펼쳐져 있는 소나무 숲과 
그 너머로 보이는 바다를 보며 휴식과 안정을 취할 수 있습니다. 

또한, 숲길과 바다길 따라 산책 운동이 가능하여 체력 증진 및 심신 건강에 도움이 될 것 입니다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
