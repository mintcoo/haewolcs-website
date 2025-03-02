import SubTitle from "@/components/common/SubTitle";
import Image from "next/image";

export default function AntioxidantTherapy() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">항산화 치료</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="항산화 치료" />
      <div className="w-full mt-8 mb-12">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`체내의 산화 물질은 생명력을 유지시키는 데 어느 정도는 필요하지만 과도한 산화 물질의 생성은 인간을 노화 시키고, 면역 기능을 약화시키며 성인병이나 암을 초래하게 한다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/antioxidant/antioxidant_1.png"
              alt="antioxidant_1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`현대 사회의 피할 수 없는 공해, 대기오염, 대기중의 방사능, 음식 섭취, 과도한 스트레스 등 산화 물질이 증가할 수 있는 요인은 무척 많으므로, 항산화를 위한 노력이 일반적으로 성행하고 있는 편이다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/antioxidant/antioxidant_2.png"
              alt="antioxidant_2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`산화-환원 반응은 상당히 복잡하고 공부하기 어려운 분야지만, 아주 간단히 말하자면...
분자 수준에서 잃어버린 전자 1개를 주변 분자에서 뺏고 뺏기는 과정을 말하며, 이 과정에서 주변 조직의 손상을 일으키게 된다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-96">
            <Image
              src="/images/antioxidant/antioxidant_3.png"
              alt="antioxidant_3"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <SubTitle title="치료에 이용되는 항산화 물질들" />
      <div className="w-full my-8">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            <strong className="font-bold">a) 셀레늄</strong>
            <br />
            {`전자 1개를 잃어버린 불안정한 분자 6개에 동시에 전자를 제공할 수 있는 강력한 항산화 작용을 할 수 있는 원소로서 암세포에 작용하는 그 역할은 점점 더 많이 알려지고 있다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/antioxidant/antioxidant_4.png"
              alt="antioxidant_4"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`실험쥐를 대상으로 한 실험에서, 간경화증의 진행을 억제시키는 강력한 항염증효과와, 암세포의 P53 발현 증가시켜 종양 크기를 감소시키는 효과가 입증되었으며, 항암치료와 방사선 치료의 내성을 감소시키고, 항암제 부작용의 완화, 세포재생 작용으로 상처의 빠른 치유, 통증의 완화, 림프부종의 감소, 면역 증강, 중금속 해독, 노화 방지, 혈전생성 억제 등 많은 작용들이 입증되고 있다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-96">
            <Image
              src="/images/antioxidant/antioxidant_5.png"
              alt="antioxidant_5"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`알아둬야 할 것은 유기 셀레늄이 아니라 무기형태의 “아셀렌산 나트륨” 제제를 복용해야한다는 점이다.`}
          </p>
          <p className="whitespace-pre-line">
            <strong className="font-bold">b) 글루타치온</strong>
            <br />
            {`주로 간에서 생성되어 우리가 섭취하는 독성 물질을 해독하는 중요한 효소이며, 나이가 들수록 생성이 감소되며, 알코홀, 흡연, 카페인, 기타 약제 등의 복용으로 감소된다.
            항암제 해독 작용으로 부작용을 감소시킬 수 있고, 체내 중금속 해독 작용도 한다. 항산화 싸이클에서 셀레늄과 함께 작용하는 강력한 항산화제이며, T 세포의 생성과 유지 역할을 하는 면역 증강제이기도 하다.`}
          </p>
          <p className="whitespace-pre-line">
            <strong className="font-bold">c) 치옥트산</strong>
            <br />
            {`알파리포산으로도 알려져 있으며, 항산화 효소인 셀레늄, 글루타치온 등을 회복시켜 항산화 네트워크를 완성시키는 효소이다.`}
          </p>
          <p className="whitespace-pre-line">
            <strong className="font-bold">d) 비타민 C</strong>
            <br />
            {`비타민 C는 비타민 중에서 가장 중요한 항산화 물질로서, 비타민 C 소비량이 많은 사람은 노화 속도가 느리다는 것이 입증되었다.`}
          </p>
          <p className="whitespace-pre-line">
            <strong className="font-bold">c) 비타민 E</strong>
            <br />
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/antioxidant/antioxidant_6.png"
              alt="antioxidant_6"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
