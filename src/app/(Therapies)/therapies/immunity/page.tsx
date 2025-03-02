import SubTitle from "@/components/common/SubTitle";
import Image from "next/image";

export default function ImmunityTherapy() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">면역증강 치료</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="면역증강 치료" />
      <div className="w-full mt-8 mb-12">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`암 치료 영역에서 면역이라 함은 암세포를 공격할 수 있는 NK/T 세포 계열을 말한다.
면역 시스템을 담당하는 임파구 (림프구)는 크게 B임파구와 T임파구로 나뉘어 진다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/immunity/immunity_1.png"
              alt="immunity_1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`뼈속 골수의 조혈모세포에서 만들어지며 이 중 T임파구는 심장 위쪽에 위치한 흉선(Thymus)으로 이동하여
            여러 가지 촉진제 (cytikine) 의 작용으로 성숙하여 T, NK (natural killer ceel, 자연살해 세포), K (killer) 세포, 수지상세포 등으로 분화한다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/immunity/immunity_2.png"
              alt="immunity_2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`이 임파구들은 나날이 생기는 암세포를 직접 또는 간접적으로 공격하여 살해하는 매우 중요한 역할을 하며, 심한 스트레스를 받거나 과도한 산화물질의 생성 등의 상태에서 이 임파구들의 활성도가 매우 떨어져 암세포를 제 때 제거하지 못하게 되면, 암이 자리 잡고 자라게 되는 것이다.   

암 진단 초기에 검사해 보면 대부분 NK 세포 활성도가 매우 떨어져 있고, 항암치료로 인하여 면역 기능은 더욱 감소하게 되므로, NK/T 세포를 촉진시키는 치료는 매우 타당하고 꼭 필요한 치료라고 하겠다.

면역세포를 촉진시키는 치료로서는 Thymosin alpha-1 과 미슬토, 이뮤코텔 등이 있으며, 본인의 혈액을 채취하여 면역세포를 분리, 실험실에서 배양하여 증폭시켜서 다시 체내로 주입하는 이뮨셀 치료 등이 있다.`}
          </p>

          <p className="whitespace-pre-line">
            <strong className="font-bold">
              a) Thymosin alpha-1 (싸이모신 알파 원 : 헤리, 자닥신, 휴닥신 등)
            </strong>
            <br />
            {`위에 언급한바와 같이 골수에서 생성된 T 임파구는 흉선으로 이동하여 성숙 분화하게 되는데 이 때 여러 가지 cytokine (싸이토카인) 들이 관여하게 된다.
Thymosin alpha-1 은 이 중 첫 번째로 작용하는 싸이토카인이며, 이의 아미노산 구성성분을 합성하여 만든 주사제로서, 자닥신, 헤리가 있으며 국내제품으로는 휴닥신 외 여러 종류가 공급되고 있다.
피하나 근육으로 주사하며, 주 2~3회 6개월~9개월간 맞으면 증가된 NK 활성도를 12개월 또는 그 이상 유지할 수 있다.

이 주사제의 또 다른 중요한 효능은 암세포 표면의 MHC class-1 항원을 발현시켜 암 살해 면역세포들이 암세포를 잘 인지하도록 만든다.
이러한 효능으로 Thymosin alpha-1 치료는 이뮨셀 등 다른 면역치료에 도움을 주는 보완적 역할을 기대할 수 있다.
다르게 표현하자면, 암세포는 표면에 여러 항원이 있으나 이를 숨기고 있어서, 즉 불을 끄고 캄캄한 곳에 숨어 있어서 체내의 면역 감시기능을 피해가는 재주가 있는데, Thymosin alpha-1 투여로 불이 켜지도록 하여 킬러 면역세포들이 암세포를 쉽게 발견할 수 있다고 이해하면 된다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/immunity/immunity_3.png"
              alt="immunity_3"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <SubTitle title="면역항암 치료" />
      <div className="w-full my-8">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            <strong className="font-bold">
              a) 미슬토 (압노바, 이스카도, 헬릭소)
            </strong>
            <br />
            {`미슬토는 전나무, 사과나무, 떡갈나무 등에 기생하여 자라는 겨우살이의 추출물이다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/immunity/immunity_4.png"
              alt="immunity_4"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`주요 구성성분인 미슬토렉틴, 비스코톡신은 일련의 싸이토카인들의 분비를 촉진시켜 NK/T 세포를 활성화 시키는 면역 증강제로 작용할 뿐만 아니라, 암세포를 직접 사멸 (apoptosis) 시키거나 괴사 (necrosis) 시켜 암세ㅇ포를 파괴하는 항암제 역할을 한다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/immunity/immunity_5.png"
              alt="immunity_5"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`장기간 투여 시 기초 체온을 올리는 작용도 있어 NK/T 세포 활성화에 더욱 도움을 주기도 하며, 베타 엔돌핀 분비를 촉진시켜, 통증 완화에도 일조한다.

급격한 면역반응을 피하기 위하여ㅇ 1/1,000 용량으로 접종을 시작하여 점차 증량하여야 하며, 어느 농도에서 반응을 보이기 시작하는데, 주로 접종 부위의 발진, 가려움증, 때로는 몽오리가 형성되기도 하는 부작용이 있으나, 냉,온 찜질 등으로 해결하고 이겨내다 보면 적응이 되어 문제없이 계속 맞을 수 있다.

2년 이상 장기간 접종과 자가 접종이 가능하고 가격도 다른 치료에 비해 저렴하므로, 암 통합 치료를 계속할 수 없는 경우에도 미슬토 치료는 계속하는 것이 도움이 될 것이다.`}
          </p>
          <p className="whitespace-pre-line">
            <strong className="font-bold">b) 메시마</strong>
            <br />
            {`몇가지 알려진 식물이나, 균사체, 해조류의 성분인 polysaccharides 는 항암제 역할을 하는데, 메시마는 상황균사체의 polysaccharides를 추출하여 만들어 낸 의약품이다.
면역 증강 작용으로 간접적으로 암세포를 제거하기도 하지만, 암세포의 성장 싸이클을 중단 시키거나, DNA 손상, 미토콘드리아 막의 파괴, 암세포의 자연사 (apoptosis) 유도, 산화질소 생성으로 인한 암세포 파괴 등 여러 가지 방법으로 암세포를 제거하고 암의 전이를 예방한다.`}
          </p>
          <p className="whitespace-pre-line">
            <strong className="font-bold">c) 이뮤코텔</strong>
            <br />
            {`대부분의 암 세포, 특히 암의 성장을 시작하는 초기 세포 (cancer initiating cells) 들의 약 90% 에서 공통적으로 발현되는 표면 항원으로 CD176 이 있다.
이뮤코텔은 삿갓구멍조개에서 얻어낸 물질로서 인체 투여 시 면역 증강 반응을 일으킬 뿐만 아니라, 암세포의 CD176 항원에 대한 항체를 생성하여 공격하는 표적치료의 역할을 한다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
