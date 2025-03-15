import SubTitle from "@/components/common/SubTitle";
import Image from "next/image";

export default function VitaminTherapy() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">고용량 Vitamin C 요법</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="고용량 Vitamin C 요법" />
      <div className="w-full mt-8 mb-12">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`Vitamin C 역시 항산화 싸이클에서 환원제로 작용하는 항산화제 및 면역 증강제로 잘 알려져 있다 (감기 예방이나 치료에 대한 Vitamin C의 면역 증강제 역할은 모두 다 알고 있다).
Vitamin C는 세포내에서 대사되어 최종적으로 H2O2로 변하는데, 정상세포에는 catalase 라는 효소가 있어서 이를 H2O + O2 (물과 산소) 로 변화 시킬 수 있는 반면, 암세포에는 이 효소가 없어 불안정한 H2O2 (과산화수소)는 OH기를 내면서 암세포를 파괴하게 된다.
즉, 항암효과가 있는 것이다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/vitamin/vitamin_1.png"
              alt="vitamin_1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`또한 암 줄기세포에도 같은 작용을 하므로, 암 줄기세포를 없앨 수 있는, 현재 알려진 바로는 거의 유일한 방법이기도 하다.

Vitamin C의 또 다른 작용은 콜라겐을 잘 형성한다는 것인데 이 점은 전이를 억제하는 효과가 있다.
`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/vitamin/vitamin_2.png"
              alt="vitamin_2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`암종괴는 특성 상 덩어리를 싸고 있는 캡슐이 없어서 주변으로 잘 퍼져나가는 성질이 있다. 폴립 같은 양성 종양은 덩어리가 캡슐에 싸여 있으므로 (양성, 악성 종양의 구별점 중 하나) 주변 전이가 안 일어난다. Vitamin C를 투여하면 암종괴 주위로 콜라겐 벽이 형성되어 덩어리가 캡슐에 싸이게 되므로 주변 전이를 어느 정도 예방할 수 있게 된다.

이렇게 Vitamin C는  
`}
            <strong className="font-bold">
              환원작용을 하는 한산화제로서 면역 기능의 항진, 암세포 및 암
              줄기세포의 파괴, 콜라겐 형성으로 암의 전이 억제 등
            </strong>
            {` 암세포 제거에 훌륭한 역할을 많이 하지만, 논의해야 할 점들이 아직 많은 게 사실이다.`}
          </p>

          <p className="whitespace-pre-line">
            <strong className="font-bold">고용량 Vitamin C 요법</strong>
            {`은 대개 30g ~ 100g 또는 그 이상의 용량을 수액에 섞어 정맥으로 투여한다. 경구용 Vitamin C가 대부분 1,000mg ~ 3,000mg (1~3g) 이라는 것과 흡수율을 고려하면 30g을 직접 정맥으로 투여한다는 것은 대단한 양이다. 안전을 고려하여 권장된 용량은 1.5g/kg 이므로 60kg 의 성인은 90g 까지 투여해도 무방하다고 한다.
부작용으로는 혈관통 (이는 농도 조절로 대부분 해결 가능하다), 목마름, 아주 드물게 신장결석 형성 등이 알려져 있다.

아직 해결되지 않은 가장 큰 문제점은...
암세포를 파괴하기 위한 Vitamin C의 용량을 잘 모른다는 점이다. 
항암 약제 처럼, 몇 그람을 투여해야 어느 정도의 암세포 제거가 가능한가에 대한 연구가 필요하다. 또한, Vitamin C의 체내 잔류 시간이 5시간 정도로 짧으므로 하루에 투여할 수 있는 용량이나 일주일에 며칠이나 투여해야 하는지에 대한 의학적 정설이 없다.
Vitamin C의 환원 작용으로 항암제 또는 항암작용을 방해하지 않을까 우려하는 의견도 있다. 
오래 전 이러한 주장이 있었으나 이 후 항암치료 와 병행 시 치료 효과를 증진시킨다는 논문이 계속 나오고 있으며, 다행히 미국 국립암센터(NCI)에서 현재 거액의 연구비를 들여 Vitamin C에 대한 연구 중이며, 곧 가이드라인이 제시될 것으로 기대된다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
