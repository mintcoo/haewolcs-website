import SubTitle from "@/components/common/SubTitle";

export default function DietTherapy() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">암의 식이요법</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="암 환우의 식이요법에 관하여" />
      <div className="w-full flex justify-between gap-8 mt-8 mb-24">
        <div className="w-1/4 bg-orange-100 rounded-lg">사진</div>
        <div className="flex-1 space-y-6 text-xl leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            {`대부분의 암 환우나 가족, 친지들은 암 진단을 받은 후 가장 먼저 무엇을 먹어야
            암 치료에 도움이 될까하고 생각하게 됩니다.
            실제로 네이버 지식인에 보면 이런 절실한 질문이 아주 많이 올라옵니다.
            
            암의 예방에 도움이 되는 식품들은 잘 알려져 있습니다.
            세계 10대 슈퍼 푸드 외에도 인삼을 비롯하여, 버섯류, 파프리카, 등등 쉽게 찾아볼 수 있습니다.
            
            항암효과를 보이는 polysaccharide를 함유한 버섯류, 미역귀 등등을 보조 식품으로 복용하는 것도 어느 정도 도움이 됩니다.
            
            그러나 암의 치료에 정말 필요한 식이 요법은 무엇을 먹는 것 보다 
            무엇을 먹지 않는 것입니다.
            
            암세포가 좋아하는 먹거리를 피해야겠지요.`}
          </p>
        </div>
      </div>
      <SubTitle title="암 세포의 대사 변화" />
      <div className="w-full flex justify-between gap-8 my-8">
        <div className="w-1/4 bg-orange-100 rounded-lg">사진</div>
        <div className="flex-1 space-y-6 text-xl leading-relaxed text-contents-color">
          <p className="whitespace-pre-line">
            <p className="font-bold">포도당(glucose), 글루타민(glutamin)</p>
            {`암세포는 정상세포와는 달리 탄수화물의 대사성분 중 포도당(glucose)과
            단백질 대사성분 중 글루타민(glutamin)을 먹고 자랍니다.`}
          </p>

          <p className="whitespace-pre-line">
            {`정상세포에서는 포도당이 대사되어 에너지(열량, 38ATP)을 내지만
              암세포에서는 포도당 대사과정이 변질되어 열량은 아주 조금만 내고(2ATP) 
              대부분이 암세포의 성장과 증식에 이용됩니다.

              이 대사 과정은 단백질의 대사산물인 글루타민(dipeptide)에 의해 더욱 촉진됩니다.
              암세포는 점점 자라면서 "글루타민을 걸신들린 듯 섭취하게 된다"고 표현한 학자도 있어요.
              지방성분도 이 대사 과정을 촉진 시킵니다.

              우리가 주식으로 먹는 쌀과 밀가루도 탄수화물이므로 대사과정에서 포도당을 생성하지만,
              주식인 밥을 먹지 않을 수 없기 때문에 포도당 섭취를 완전히 피할 순 없겠지요.

              설탕과 꿀은 자당과 포도당으로 구성되어 있어서 가장 피해야 할 식품에 해당됩니다.
              과일은 주로 과당 성분을 함유하므로 먹어도 되는 식품입니다.

              글루타민은 대부분의 식품에 조금씩 함유되어 있어 완전히 피할 수는 없습니다.
              동물의 근육조직 (육류 식품, 특히 쇠고기나 개, 염소고기 등 고단백 식품)의 단백질 대사과정에서 
              다량 생성되므로 이런 식품의 섭취를 피하거나 대폭 줄여야 합니다.
              
              `}
            <p className="whitespace-pre-line">
              <p className="font-bold">
                포도당, 글루타민, 지방섭취를 줄이기 위한 실제 식생활 방식의 권유
              </p>
              {`1. 가능한 설탕이나 꿀이 들어간 단 음식, 음료는 피합니다.
                2. 고단백 육류 식품이나 고열량의 보양식은 피하는 것이 좋습니다.
                3. 육류의 섭취는, 식당이나 집에서 불고기, 갈비, 삼겹살 구이, 스테이크 등 주 요리로 먹는 방식을 피하고, 
                식사 때 반찬으로 곁들여 몇 점 먹도록 하면 양을 훨씬 줄일 수 있습니다.
                4. 기름에 튀긴 음식은 가능한 피하도록 합니다.`}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
