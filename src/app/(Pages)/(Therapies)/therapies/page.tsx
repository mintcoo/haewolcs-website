import SubTitle from "@/components/common/SubTitle";
import { Metadata } from "next";
import Image from "next/image";
import mechanism4 from "/public/images/mechanism/mechanism_4.png";

export const metadata: Metadata = {
  title: "암 통합치료",
};

export default function Therapies() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">암 통합치료</div>
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
            <img
              src="/images/mechanism/mechanism_4.png"
              alt="mechanism_4"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="whitespace-pre-line">{`에서 재발이 발견되는 이유이고, 보이지 않는 잔존암을 제거하기 위해 수술 후 6개월씩이나 항암치료를 받아야 하는 이유이다.
항암제로도 다 제거되지 못한 암세포, 특히 암 줄기세포 들이 살아남아 증식하여 발견된 것도 물론 재발이라고 하고, 다른 종류의 항암제로 다시 치료를 해야 한다.`}</p>
        </div>
      </div>
      <SubTitle title="암 통합치료" />
      <div className="w-full my-8">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`암의 발생기전에서 설명한 대로 수술, 방사선 치료, 항암치료 까지 받은 후에도 재발의 가능성에서 자유로울 수 없어서 6개월 마다 추적 검사를 받아야 한다. 

수년간 소리 없이 커 오던 암 종괴가 발견되는 시기에 따라 1기, 2기, 3기, 4기로 병기가 나뉘어지고 생존율 같은 예후가 결정된다.
암의 종류에 따라 병기 분류법은 각각 다르지만 대체적으로 1~3기는 암 병변이 원발 부위에 국한되어 있거나 주변 림프절에 전이된 정도이고, 4기는 종괴가 커져서 주변 장기까지 침법되었거나, 원격 장기 또는 원격 림프절까지 전이된 경우이다. 

가장 중요한 것은 발견된 원발암 및 전이암 병소가 수술로 제거할 수 있는가 하는 것이다.
수술이 암을 제거하는 가장 강력한 치료법이기 때문이다.

대체적으로 1~3기 까지는 수술 치료가 가능하고, 4기는 대부분 불가능하지만, 전이암도 수술 가능한 경우에는 수술을 하기도 한다.
가끔 병기는 낮으나 주요 동맥에 너무 가까이 있거나, 장기의 중심에 위치해 있어서 수술하기 어려운 경우도 있다.
수술은 보이는 암 종괴를 중심으로 정상 조직을 넓게 포함해서 범위를 잡기 때문에, 때로는 미리 항암치료 (선항암) 및 방사선 치료로 암세포를 많이 없애고 암종괴의 크기를 줄인 후에 수술을 하기도 한다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <img
              src="/images/integrated/integrated_1.png"
              alt="integrated_1"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="whitespace-pre-line">
            {`직장암이나 유방암 등 국소 재발의 가능성이 많고, 영향을 미칠만한 주변장기가 별로 없는 경우에 국소치료를 강화하기 위해 방사선 치료를 추가하기도 한다.
수술과 마찬가지로 방사선 치료를 할 수 없는 부위도 있다.`}
          </p>
        </div>
      </div>
      <SubTitle title="방사선 치료" />
      <div className="w-full my-8">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`방사선 치료는 필요한 전체 선량을 수일에 나누어서 조사하는데, 주변 장기의 손상을 최소화 하려는 이유도 있다. 방사선 치료 기계의 발전으로 치료 부위를 훨씬 정밀하게 설정할 수 있어서 하루의 선량을 눌릴 수 있어 치료 기간을 단축시키기도 한다.
척추나 뇌에 생긴 종양은 방사선 치료로 도려내듯 설정할 수 있어서 방사선수술이라는 표현을 쓰기도 한다.

방사선 치료는 치료성적도 우수하고, 치료시간이 매우 짧고 (수분 내), 치료 시 전신적인 부작용이 별로 없어 치료 받기가 매우 편하지만, 주변 조직에 미치는 영향으로 인한 부작용으로 치료에 제한점이 많은 편이다.

폐의 치료 주변에 생길 수 있는 방사선 폐렴, 유방의 치료 부위에 생기는 화상에 가까운 피부 변화, 복강내 치료 시 주변의 소장 염증에 의한 장유착, 뇌의 주변 조직 손상에 의한 부종 등의 부작용이 있을 수 있지만, 기계와 의료진 기술의 발전으로 부작용의 빈도가 점점 줄어드는 상황이다. 
피폭량에도 제한이 있어서, 방사선 치료를 여러번 받아야 하는 경우, 과거 방사선 치료의 피폭량을 합산하여 조사량을 설정한다.`}
          </p>
        </div>
      </div>
      <SubTitle title="수술 후 항암치료" />
      <div className="w-full my-8">
        <div className="flex-1 space-y-6 leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`수술 후 항암치료를 해야하는 이유는 
암의 행동양식을 이해하면 수술과 방사선 치료로 모든 암을 완벽히 제거한 후에도
몸속 어딘가에 잔존암이 남아 있을 가능성이 충분히 있고, 어디에 어떻게 암세포의 씨앗이 뿌려져 있는지 모르기 때문에 국소치료 외에도 전신적으로 작용하는 항암제를 일정기간 투여해서 잔존암을 제거해야 하기 때문이다.

항암치료는 주사제건 먹는 약이건 한가지 약제를 쓰기도 하지만 대부분 2~3가지 약제를 섞어서 쓰고, 암 종류마다 잘 듣는 항암제가 서로 달라서 환자들이 다 다르게 치료 받고, 부작용도 달라서 탈모가 오는 약, 설사를 일으키는 약, 호중구나 혈소판이 떨어지는 약, 손발 저림, 근육통, 여드름 등 모두 다 다르기 때문에 다른 환자의 예를 보고 미리 겁을 낼 필요가 없다.

항암제의 한계는,

첫째는, 항암제에 내성이 생길 수 있다.
태고 적부터 박테리아를 비롯한 생물들이 외부의 독성물질로부터 스스로를 보호하려고 애쓰다 얻은 능력이 저장된 DNA 일부는 진화과정에서도 그대로 전달되어 대부분의 동물세포가 공통적으로 가지고 있게 된다. 암세포 또한 이 유전자를 가지고 있고, 그 외 여러 가지 기능을 발달시켜서 독한 항암물질로부터 스스로를 지켜내는데 성공하는 세포들이 생기게 된다. 이렇게 암세포가 항암제를 이겨내는 상황이 되면 그 항암제에 내성이 생겼다고 말한다.
이 때는 항암제를 바꾸어 다른 메카니즘으로 암을 공격해야 하는데 항암제 종류가 한정되어 있어서 현실적으로 완전히 내성을 극복하기는 어렵다.  

두번째는, 투여되는 항암제의 용량이 부족할 수 있다.
만일 어떤 항암제의 투여 용량이 체표면적당 100mg 이라면, 이는 임상 1,2,3 시험을 통하여 암세포를 어느 정도 죽일 수 있으나 사람이 견딜 수 있는 용량을 결정한 것이므로, 암세포를 완전히 없애기에는 부족하다고 할 수 있다.
`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <img
              src="/images/integrated/integrated_2.png"
              alt="integrated_2"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="whitespace-pre-line">
            {`세번째는, 현재의 항암제로는 암 줄기세포를 없앨 수가 없다. 
항암치료에도 살아남은 암세포는 증식을 하면서 줄기세포로 변할 수 있으므로 이를 없애지 않고는 암을 완전히 극복할 수가 없다.
의학의 발전으로 이런 항암제가 어서 나오기를 바랄 수밖에 없겠다.`}
          </p>
          <div className="relative w-full lg:w-1/2 h-72">
            <img
              src="/images/integrated/integrated_3.png"
              alt="integrated_3"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="whitespace-pre-line">
            {`이렇게 수술, 항암, 방사선치료 등을 표준치료 라고 하는데
이 표준치료로도 암이 완전히 정복되었다고 할 수 없는 현실이다.

따라서 보조적인 몇가지 치료법이 인정되고 있는데, 이 치료들은 심평원에서 효능은 인정하나 급여 혜택은 아직 주어지지 않은 상태로 이를 “인정 비급여”라고 하며, 일부는 대학병원 등 상급병원에서도 시행되고 있으나 지속적으로 치료해야하는 이유 등으로 감당하기 어려워, 주로 암 전문 병,의원이나 암 전문 요양병원에서 치료를 하고 있다. 

그 종류를 보면, 
 `}
          </p>
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
              <p className="mt-1 ml-4 text-base">• 이뮤코텔, 메시마</p>
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
                • 아미노산 제제, 마이어스 칵테일, 푸르설티아민, 멀티비타 주,
                징크 주
              </p>
            </li>
            <li className="list-decimal">
              <span className="font-medium">Vitamin D</span>
            </li>
          </ul>
          <p>등이 있다.</p>
        </div>
      </div>
    </div>
  );
}
