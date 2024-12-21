import SubTitle from "@/components/common/SubTitle";

export default function Therapies() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">암 통합치료 zz</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="암 통합치료에 대한 이해" />
      <div className="w-full flex justify-between gap-8 my-8">
        <div className="w-1/4 bg-orange-100 rounded-lg">사진</div>
        <div className="flex-1 space-y-6 text-xl leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`우리가 받는 수술, 항암, 방사선치료 등을 표준치료 라고 하는데
            어쨌든 현재로서는 이 표준치료로 암이 완전히 정복되었다고 할 수 없는 현실이다.`}
          </p>

          <p className="whitespace-pre-line">
            {`따라서 보조적인 몇가지 치료법이 인정되고 있는데, 이 치료들은 심평원에서 효능은 인정하나 급여 혜택은 아직 주어지지 않은 상태로 이를 "인정 비급여"라고 하며,
            일부는 대학병원 등 상급병원에서도 시행되고 있으나 지속적으로 치료해야하는 이유 등으로 감당하기 어려워, 주로 암 전문 병,의원이나 암 전문 요양병원에서 치료를 하고 있다.`}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between gap-8">
        <div className="w-1/4"></div>
        <div className="flex-1 space-y-6 text-xl leading-relaxed text-contents-color">
          <p>그 종류를 보면, 아래 목록과 같다.</p>
          <ul className="space-y-4 text-xl text-contents-color ml-8">
            <li className="list-decimal">
              <span className="font-medium">고주파 온열치료</span>
            </li>
            <li className="list-decimal">
              <span className="font-medium">면역증강 치료</span>
              <div className="mt-1 ml-4 text-base">
                <p>• 싸이모신: 헤리, 자닥신, 휴닥신</p>
                <p>• 미슬토: 압노바, 이스카도, 헬릭소</p>
              </div>
            </li>
            <li className="list-decimal">
              <span className="font-medium">면역항암 치료</span>
              <p className="mt-1 ml-4 text-base">
                • 이뮤코텔, 메시마, 폴리엘가
              </p>
            </li>
            <li className="list-decimal">
              <span className="font-medium">고용량 Vitamin C</span>
            </li>
            <li className="list-decimal">
              <span className="font-medium">항산화 치료</span>
              <p className="mt-1 ml-4 text-base">
                • 셀레늄, 글루타치온, 치옥트산
              </p>
            </li>
            <li className="list-decimal">
              <span className="font-medium">영양수액제</span>
              <p className="mt-1 ml-4 text-base">
                • 마이어스 칵테일, 푸르설티아민, 징크 주
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
