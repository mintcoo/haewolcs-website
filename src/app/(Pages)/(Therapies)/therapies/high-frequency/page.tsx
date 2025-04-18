import SubTitle from "@/components/common/SubTitle";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "고주파 온열치료",
};

export default function HighFrequencyTherapy() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">고주파 온열치료</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="고주파 온열치료" />
      <div className="w-full mt-8 mb-12">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`정상 세포와 암세포는 열에 대한 감수성, 주파수에 대한 감수성에 차이가 있다.
세포의 대사작용에도 차이가 있지만 주로 세포막의 차이에 영향을 받게 된다.
정상세포는 2겹의 세포막이 존재하지만, 암세포는 급히 성장하느라 세포막을 1겹 밖에 만들지 못하여, 열이나 주파수에 매우 약하다.

정상세포는 47도 이상의 온도에서 손상을 받지만 암세포는 42도에서 손상을 받기 시작한다.
정상세포는 100MHz 이상의 고주파에 손상을 받지만 암세포는 10~15MHz 의 주파수에도 손상을 입는다.
참고로 목욕탕 온수 온도는 약 40도이고, 대기 중에 가득한 FM 라디오/TV 주파수는 100MHz 전후 인데, 이렇게 높은 주파는 체내 침투가 안 되니까 염려할 필요가 없고, 10~15MHz 정도의 주파는 20~48cm 깊이 까지 체내 침투가 가능하여 암종괴에  도달할 수 있다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-64">
            <Image
              src="/images/frequency/frequency_1.png"
              alt="frequency_1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <SubTitle title="온코써미아 (Oncothermia)" />
      <div className="w-full my-8">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`이 곳의 고주파 치료 기계는 온코써미아 (Oncothermia) EHY-2000 plus  인데 이 기계는 13.56MHz를 보낸다.
            이는 1초당 약 1,300만번 진동하여 세포를 가온 시킨다. 즉 열을 발생시켜 암세포 온도가 44도 이상 올라가게 만든다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-96">
            <Image
              src="/images/frequency/frequency_2.png"
              alt="frequency_2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`그림과 같이 암세포의 얇은 막을 손상시키는 고주파 치료와, 암세포에 일으킨 열로 DNA를 파괴하는 온열 치료가 동시에 이루어지는 것이다.
발열의 또 하나 중요한 역할은 암종괴 주변의 온도도 올라가므로 주변 혈관이 부풀어 올라 암 종괴 쪽으로 혈류량이 증가한다는 점이다.
그러므로 항암치료 중에 고주파 치료를 하면 항암제가 암종괴로 많이 투입되어 항암치료 효과를 촉진시키게 되고, 고용량 Vitamin C를 고주파 치료 중에 투여하게 되면 Vitamin C 유입량의 증가로 암세포 파괴 효과가 증진된다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-96">
            <Image
              src="/images/frequency/frequency_3.png"
              alt="frequency_3"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`(암은 신생혈관을 통하여 주변 혈관으로부터 영양 및 산소공급을 받는다.)

            고주파는 암 종괴의 주변세포부터 손상을 일으키며, 그 과정에서 마찰열이 발생하고, 이로 인해 주변의 혈류량이 증가하게 된다.
또한 암세포 내 산소 농도를 증가시켜 방사선 치료의 효과도 높인다.
온열치료 기능의 또 다른 이점은 체내 내부 온도의 상승으로 NK 세포 활성도를 올린다는 점도 있다.

고주파 기계에 관하여 첨언하면,
온코써미아 기계에는 modulation 이라는 기능이 있는데, 이는 암세포의 생화학적, 전자기적 특성을 이용하여 주파가 암세포의 고유 시그널을 찾아가는 기능이 있어서 치료 효과가 우수하고, 이에 따라 투여하는 에너지(watt)를 줄일 수 있어서 화상 등의 부작용이 적다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <img
              src="/images/frequency/frequency_4.png"
              alt="frequency_4"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="whitespace-pre-line">
            {`고주파온열치료 기계에서 최소한 확인해야 할 것은 암세포를 파괴할 수 있는 10MHz 이상의 주파를 보낼 수 있는가 하는 점이다.
또한 각 기계에 따른 임상결과에 대한 논문도 반드시 살펴서 기대하는 치료성적이 나오는지에 대한 확인도 필요하다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
