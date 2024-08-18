import { THERAPY_LIST } from "@/lib/constants";

export default function Therapies() {
  return (
    <>
      <ul className="f-c-c">
        {THERAPY_LIST.map((therapy, index) => {
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
    </>
  );
}
