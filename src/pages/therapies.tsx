import React from "react";
import Layout from "../components/layout";
import { useRecoilValue } from "recoil";
import { therapyListState } from "../store/atom";

function Therapies() {
  const therapies = useRecoilValue(therapyListState);

  return (
    <Layout>
      <ul className="f-c-c">
        {therapies.map((therapy, index) => {
          return (
            <li
              key={index}
              className="w-10vw h-[10vw] bg-purple-100 rounded-full f-c-c"
            >
              <div className="font-semibold text-2vw ">{therapy.name}</div>
            </li>
          );
        })}
      </ul>
      <div className="bg-purple-500 ">치료 설명가자</div>
    </Layout>
  );
}

export default Therapies;
