import React from "react";

interface ITherapies {
  name: string;
}

function Therapylist() {
  const therapies: ITherapies[] = [
    { name: "암 통합치료" },
    { name: "고주파 온열치료" },
    { name: "면역 증강치료" },
    { name: "항산화 치료" },
  ];
  return (
    <>
      <div className="bg-yellow-100 f-c-c-c h-1/3">
        <div className="text-6xl font-semibold text-gray-700 ">
          해월씨에스의 <span className="text-sky-300">치료</span>
        </div>
        <div className="mt-4 text-3xl text-gray-500">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <div className="flex items-center bg-sky-100 h-1/2 justify-evenly">
        {therapies.map((therapy) => {
          return <div>{therapy.name}</div>;
        })}
      </div>
    </>
  );
}

export default Therapylist;
