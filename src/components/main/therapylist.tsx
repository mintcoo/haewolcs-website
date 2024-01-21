import React from "react";

interface ITherapies {
  name: string;
}

const therapies: ITherapies[] = [
  { name: "암 통합치료" },
  { name: "고주파 온열치료" },
  { name: "면역증강 치료" },
  { name: "항산화 치료" },
];

function Therapylist() {
  return (
    <div className="flex h-full bg-slate-400">
      <div className="bg-yellow-100 f-c-c-c w-30vw">
        <div className="font-semibold text-gray-700 text-3vw ">
          해월씨에스의 <span className="text-sky-300">치료</span>
        </div>
        <div className="mt-4 text-gray-500 text-1.2vw">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <div className="flex flex-wrap flex-1 justify-evenly bg-sky-100">
        {therapies.map((therapy, index) => {
          return (
            <div
              key={index}
              className="w-[20vw] h-[20vw] bg-purple-100 rounded-full f-c-c "
            >
              <div className="font-semibold text-2vw ">{therapy.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Therapylist;
