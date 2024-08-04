import { Metadata } from "next";

export const metadata: Metadata = {
  title: "의원소개",
};

export default function Introduction() {
  return (
    <div className="contents-layout">
      <div className="sub-title">인사말</div>
      <div className="sub-title-bar"></div>
      <div className="w-full flex justify-between">
        <div className="text-xl text-contents-color tracking-tight">
          <div className="text-4xl haewol-blue-title">해월씨에스 의원 원장</div>
          <span className="font-bold text-4xl haewol-blue-title">한창순</span>
          <span className="text-4xl haewol-blue-title">입니다.</span>
          <div className="my-8">
            방문해 주신 모든 분들께 감사의 말씀드립니다.
          </div>
          <div>
            저희 의원에서는 달맞이길의 문탠로드를 따라 펼쳐져 있는 소나무 숲과
          </div>
          <div>
            그 너머로 보이는 바다를 보며 휴식과 안정을 취할 수 있습니다.
          </div>
          <div>다양하고 최적의 치료법을 통해</div>
          <div>
            환우 여러분의 기능 회복 및 일방 복귀를 위하여 전력을 다하겠습니다.
          </div>
          <div>감사합니다.</div>
        </div>
        <div className="w-1/3 bg-orange-100">사진</div>
      </div>
    </div>
  );
}

// 혈액종양내과 전문의로서 주로 항암치료를 전담하였으며,

// 최근 암 통합치료 중점 병원에서 암에 대한 통합치료를 전담하였습니다.

// “해월 씨에스 의원”은 29 병상의 작은 의원으로

// 1층 주차장 위로 3,4 층은 병실, 간호사실, 주사실, 도수치료실이 있고,

// 5층은 원무과, 진료실, 고주파온열치료실, 1인실, 주방과 식당이 있습니다.

// 병실은 4인실 (5실), 3인실 (2실), 2인실 (1실)과 1인실 (1실) 이 있으며,

// 수술 후, 항암 치료, 방사선 치료 전후에 장기 및 단기 입원과 외래 치료가 가능하며,

// 항암 치료 부작용 관리와

// 아래 열거한 암 통합치료를 받으실 수 있습니다.

// 온코써미아를 이용한 고주파 온열치료,

// 면역증강치료로 싸이모신 알파원 (헤리, 자닥신, 휴닥신) 주사 및

// 미슬토제제로 압노바, 이스카도, 헬릭소 주사,

// 면역항암제로 이뮤코텔, 메시마,

// 녹십자와 연계하여 이뮨셀 주사,

// 항산화치료로 셀레늄, 글루타치온, 치옥트산 주사 및 ​

// 암에 대한 직접 치료로 고용량 비타민 C 요법 등을 시행하며,

// 이에 대한 자세한 설명은 “암 통합치료” 난에 기재되어 있습니다.

// 그 외에 비타민 D, 마이어스 칵테일, 푸르설티아민, 징크 등 미네랄과 비타민 공급,

// 아미노산, 콤비플렉스 등의 영양 수액제 처방이 가능합니다.

// 고주파온열치료 기계는 Oncothermia EHY-2000 PLUS를 도입하였으며

// 모든 주사제의 조제는 무균조제 부스에서 시행하고 있습니다.

//  황토쑥뜸치료 및 도수물리치료를 받으실 수 있고

// 온열 물침대가 구비되어 있으며,

// 반신욕기와 런닝머신은 바다가 보이는 베란다에 설치되어 있어

// 달맞이길의 문탠로드를 따라 펼쳐져 있는 소나무 숲과

// 그 너머로 보이는 바다를 보며 휴식과 안정을 취할 수 있습니다.
