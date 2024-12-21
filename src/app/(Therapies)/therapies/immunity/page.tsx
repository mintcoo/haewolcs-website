import SubTitle from "@/components/common/SubTitle";

export default function ImmunityTherapy() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">면역증강 치료</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="면역증강 치료" />
      <div className="w-full flex justify-between gap-8 mt-8 mb-24">
        <div className="w-1/4 bg-orange-100 rounded-lg">사진</div>
        <div className="flex-1 space-y-6 text-xl leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`여기서 면역이라 함은 암세포를 공격할 수 있는 NK/T 세포 계열을 말한다.
              면역 시스템을 담당하는 임파구 (림프구)는 크게 B임파구와 T임파구로 나뉘어 진다.`}
          </p>

          <p className="whitespace-pre-line">
            {`뼛속 골수의 조혈모세포에서 만들어지며 이 중 T임파구는 심장 위쪽에 위치한 흉선(Thymus)으로 이동하여 여러 가지 촉진제 (cytikine) 의 작용으로 성숙하여 T, NK (natural killer ceel, 자연살해 세포), K (killer) 세포, 수지상세포 등으로 분화한다. 

              이 임파구들은 나날이 생기는 암세포를 직접 또는 간접적으로 공격하여 살해하는 매우 중요한 역할을 하며, 심한 스트레스를 받거나 과도한 산화물질의 생성 등의 상태에서 이 임파구들의 활성도가 매우 떨어져 암세포를 제 때 제거하지 못하게 되면, 암이 자리 잡고 자라게 되는 것이다. 

              암 진단 초기에 검사해 보면 대부분 NK 세포 활성도가 매우 떨어져 있고, 항암치료로 인하여 면역 기능은 더욱 감소하게 되므로, NK/T 세포를 촉진시키는 치료는 매우 타당하고 꼭 필요한 치료라고 하겠다.

              면역세포를 촉진시키는 치료로서는 Thymosin alpha-1 과 미슬토, 이뮤코텔 등이 있으며, 본인의 혈액을 채취하여 면역세포를 분리, 실험실에서 배양하여 증폭시켜서 다시 체내로 주입하는 이뮨셀 치료 등이 있다.`}
          </p>
        </div>
      </div>
      <SubTitle title="면역항암 치료" />
      <div className="w-full flex justify-between gap-8 my-8">
        <div className="w-1/4 bg-orange-100 rounded-lg">사진</div>
        <div className="flex-1 space-y-6 text-xl leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            <p className="font-bold">미슬토 (압노바, 이스카도, 헬릭소)</p>
            {`미슬토는 전나무, 사과나무, 떡갈나무 등에 기생하여 자라는 겨우살이의 추출물이다.`}
          </p>

          <p className="whitespace-pre-line">
            {`주요 구성성분인 미슬토렉틴, 비스코톡신은 일련의 싸이토카인들의 분비를 촉진시켜 NK/T 세포를 활성화 시키는 면역 증강제로 작용할 뿐만 아니라, 암세포를 직접 사멸 (apoptosis) 시키거나 괴사 (necrosis) 시켜 암세포를 파괴하는 항암제 역할을 한다.

              장기간 투여 시 기초 체온을 올리는 작용도 있어 NK/T 세포 활성화에 더욱 도움을 주기도 하며, 베타 엔돌핀 분비를 촉진시켜, 통증 완화에도 일조한다.

              급격한 면역반응을 피하기 위하여 1/1,000 용량으로 접종을 시작하여 점차 증량하여야 하며, 어느 농도에서 반응을 보이기 시작하는데, 주로 접종 부위의 발진, 가려움증, 때로는 몽오리가 형성되기도 하는 부작용이 있으나, 냉,온 찜질 등으로 해결하고 이겨내다 보면 적응이 되어 문제없이 계속 맞을 수 있다.

              2년 ~ 5년간 장기간 접종과 자가 접종이 가능하고 가격도 다른 치료에 비해 저렴하므로, 암 통합 치료를 계속할 수 없는 경우에도 미슬토 치료는 계속하는 것이 좋겠다. 
              재발 여부를 확인하기 위해 3~6개월 간격으로 검사만 하러 다니는 시기에도 그냥 가만히 기다리는 것 보다, 미슬토 주사를 맞고 있으면 면역도 올리고 암세포를 계속 없애고 있다는 생각에 안심이 될 수도 있겠다.  `}
          </p>
        </div>
      </div>
    </div>
  );
}
