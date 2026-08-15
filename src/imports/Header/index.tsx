import imgFrame241 from "./c06761a7de8a442cd6a45db796d69e4fa8bd0961.png";

export default function Header() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex gap-[468px] items-start px-[60px] py-[10px] relative size-full" data-name="Header">
      <div className="h-[85px] relative shrink-0 w-[160px]" data-name="Frame 24 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame241} />
      </div>
      <div className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[73px] leading-[0] not-italic relative shrink-0 text-[#302f2a] text-[24px] w-[87px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`01. `}</p>
        <p className="leading-[normal]">Work</p>
      </div>
      <div className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[72px] leading-[0] not-italic relative shrink-0 text-[#302f2a] text-[24px] w-[152px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">02.</p>
        <p className="leading-[normal]">{`About  me `}</p>
      </div>
    </div>
  );
}