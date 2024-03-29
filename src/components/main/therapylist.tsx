import React from "react";
import { useRecoilValue } from "recoil";
import { therapyListState } from "../../store/atom";

function Therapylist() {
  const therapies = useRecoilValue(therapyListState);

  return (
    <div className="flex h-full bg-slate-400">
      <div className="flex flex-col items-start justify-center bg-yellow-100 w-30vw">
        <div className="w-1/5 h-1 mb-2 xl:mb-8 bg-sky-300"></div>
        <div className="font-semibold text-gray-700 text-3vw ">
          해월씨에스의 <span className="text-orange-300">치료</span>
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
              className="w-20vw h-[20vw] bg-purple-100 rounded-full f-c-c"
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
