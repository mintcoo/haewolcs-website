interface ISubTitleProps {
  title: string;
}

export default function SubTitle({ title }: ISubTitleProps) {
  return (
    <div className="f-c-c w-full">
      <div className="f-c-c-c">
        <div className="haewol-darkblue-bg w-2 h-4"></div>
        <div className="haewol-orange-bg w-2 h-4"></div>
      </div>
      <div className="sub-title">{title}</div>
      <div className="flex-grow h-0.5 bg-slate-200"></div>
    </div>
  );
}
