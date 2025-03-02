import SubTitle from "@/components/common/SubTitle";
import Image from "next/image";

export default function Therapies() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">암의 발생기전</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="암의 발생기전" />
      <div className="w-full mt-8 mb-12">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`모든 것은 한 개의 세포로부터 시작된다.
태아의 모든 장기도, 우리가 피검사에서 수치로 알 수 있는 백혈구 적혈구 혈소판 등등을 만드는 뼈 속 (골수)의 조혈모 세포까지, 모두 각 장기의 특성을 가진 한 개의 모세포가 증식하는 형성되는 것이다. 

암세포도 그렇다.
한 개의 세포 속 DNA 가 치명적인 변형이나 손상을 입고, 유전자 제어가 안되면 암세포로 변하고 그 한 개의 암세포가 멈추지 않는 증식을 하는 것이다.

장기들은 일정한 크기로 되면 성장을 멈추었다가 특별한 상황이 되면 다시 성장하다 멈추다 한다. (예를 들면, 간 조직은 성장이 멈추었지만, 간을 일부 잘라 내거나 경화증으로 못쓰게 되면 남은 부위가 성장을 시작해서 자라게 된다.) 즉 성장이 조절되고 있다는 뜻이고 이 조절 기능은 세포내에 잠재되어 있다.
성장을 촉진하는 유전자와 이를 제어시키는 유전자도 있고, 손상 입은 유전자를 고치는 유전자, 세포가 늙으면 사멸되도록 하는 유전자 코딩 프로그램도 내제되어 있다. `}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/mechanism/mechanism_1.png"
              alt="mechanism_1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">
            {`이런 유전자들이 손상을 입으면 암세포로 변할 수 있는데, 왜 손상을 입을까?
대부분이 외부적, 환경적 요인에 기인한다.

특별한 경우의 바이러스 감염 (B,C형 간염 바이러스(간암), HPV(자궁경부암), EBV(임파암) 등)
공해, 대기오염, 미세먼지, 대기 중 방사선 물질, 발암물질 섭취 등도 있지만
(직접적으로 DNA 손상시키거나, 산화물질 유발 시키거나)
음식물이나 정신적 스트레스에 의한 체내 산화물질의 축적에 의한 부분이 매우 크다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/mechanism/mechanism_2.png"
              alt="mechanism_2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">{`이 지구 상에서 살아가는 한, 우리는 유전자 손상을 일으키는 이 외부 요인들로부터 자유로울 수 없다. 다만, 산화물질을 제거하는 항산화 물질이 도움이 될 수 있겠다는 하나의 해답은 얻을 수 있겠다. 

이렇듯 온갖 발암물질에 노출되고, 쌓여만 가는 산화 물질 때문에 우리 몸 속 장기의 세포들의 DNA는 손상, 복구를 거듭하다 결국 몇 개는 암세포로 변하고 마는데, 하루에도 수십 내지 수백개의 암세포가 생겨난다고 한다.

그럼 왜 모든 사람이 다 암환자가 아닌 건가?
바로 우리 몸속에 존재하는 암을 잡아먹는 킬러 세포들 덕분이다.
임파구에 속하는 대여섯 가지 종류의 세포들이 있는데
대표적인 것이 우리가 잘 아는 NK세포이고 그 외 T세포, K세포, 수지상 세포 등등이 있다.

우리의 면역 체계가 튼튼할 때는 이런 세포들이 활발히 온 몸을 돌아다니면서 바이러스 뿐 아니라 암세포도 이물질로 간주하고 공격하여 죽여 버린다.
그러나 심한 스트레스를 받거나 감정적으로 억눌린 상태, 체내 산화 물질이 많이 쌓이는 환경에서는 NK 등 킬러 세포들도 억눌려져서 맥을 못추고 활동을 못하게 된다.
이런 상태가 지속되어 날마다 생기는 암세포가 적절히 제거되지 못하면 암세포는 증식하여 덩어리 (종괴)를 형성하게 된다.
NK 세포 등을 증식 또는 활성화시키는 면역증강치료가 필요하다는 결론을 얻게 된다. 

암 종괴가 자라는 상태는 잠시 숫자로 설명이 필요하다.

한 개의 암세포가 2개로 자라는 기간(doubling time)은 대략 3~6 개월 걸린다.
(암 치료 후 CT 검사 간격을 3~6개월로 잡는 이유이다.)

암 종괴의 직경이 0.2~1cm 되어야 CT 등의 검사에서 발견되는데 대부분 1기에 해당된다.
1cm 크기의 암은 약 1g 정도이며 약 10억개 이상의 암세포가 모여 있다.
한 개의 암세포가 1cm 크기가 될 때까지는 30회의 doubling, 7년 이상의 시간이 걸린다.

(암이 발견된 후 언제 암이 자리 잡았을까 생각해 보게 되는데 최소 5년 이상 과거를 되돌아보아야 한다는 얘기이다.)`}</p>

          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/mechanism/mechanism_3.png"
              alt="mechanism_3"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">{`암의 크기가 2mm (암세포수 400만개) 정도 되면 스스로 혈관을 새로 만들어내는 능력을 얻게 된다.
        신생혈관을 만들어 가까운 기존 혈관과 연결시켜 길을 터놓고 기존 혈관으로부터 영양분과 산소를 공급받아서 먹고 살기도 하고, 그 길을 통하여 혈기왕성한 젊은 세포들은 원발암의 밀집한 환경을 벗어나 더 살기 좋은 장소를 찾아 떠나기도 한다.
이것이 혈관을 통한 전이 이다. 
(전이는 보다 더 자주 림프관을 따라 일어난다.)
`}</p>
          <div className="relative w-full lg:w-1/2 h-72">
            <Image
              src="/images/mechanism/mechanism_4.png"
              alt="mechanism_4"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="whitespace-pre-line">{`에서 재발이 발견되는 이유이고, 보이지 않는 잔존암을 제거하기 위해 수술 후 6개월씩이나 항암치료를 받아야 하는 이유이다.
항암제로도 다 제거되지 못한 암세포, 특히 암 줄기세포 들이 살아남아 증식하여 발견된 것도 물론 재발이라고 하고, 다른 종류의 항암제로 다시 치료를 해야 한다.`}</p>
        </div>
      </div>
    </div>
  );
}
