import svgPaths from "./svg-lbsvzf3ps7";
import imgFrame241 from "./c06761a7de8a442cd6a45db796d69e4fa8bd0961.png";
import imgGifFlower from "./195b5c5b76a94118161174be63dc0b14987e854c.png";

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[201px] relative w-[1334px]"} data-name="logo">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[9px] items-end relative size-full">
          <div className="h-[129px] relative shrink-0 w-[44px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="129" preserveAspectRatio="none" viewBox="0 0 44 129" width="44">
              <path d={svgPaths.p15a96f00} fill="white" id="Vector" />
            </svg>
          </div>
          <div className="h-[83px] relative shrink-0 w-[84px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="83" preserveAspectRatio="none" viewBox="0 0 84 83" width="84">
              <path d={svgPaths.p68a4800} fill="white" id="Vector" />
            </svg>
          </div>
          <div className="h-[87px] relative shrink-0 w-[76px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="87" preserveAspectRatio="none" viewBox="0 0 76 87" width="76">
              <path d={svgPaths.p15b3c880} fill="white" id="Vector" />
            </svg>
          </div>
          <div className="h-[121px] relative shrink-0 w-[46px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="121" preserveAspectRatio="none" viewBox="0 0 46 121" width="46">
              <path d={svgPaths.p9331f00} fill="white" id="Vector" />
            </svg>
          </div>
          <div className="h-[87px] relative shrink-0 w-[86px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="87" preserveAspectRatio="none" viewBox="0 0 86 87" width="86">
              <path d={svgPaths.p3d511500} fill="white" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[1334px]"} data-name="title1">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="container">
          <p className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[119px] leading-[normal] not-italic relative shrink-0 text-[190px] text-white w-[269px]">I’m</p>
          <Logo className="h-[201px] relative shrink-0 w-[1334px]" />
        </div>
        <p className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[90px] leading-[normal] not-italic relative shrink-0 text-[#302f2a] text-[36px] w-[1323px]">Senior Product Designer specializing in the creation of intuitive digital experiences, interaction design, and user-centered interfaces.</p>
      </div>
    </div>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <div className={className || "h-[85px] relative w-[1334px]"} data-name="Header">
      <div className="content-stretch flex gap-[468px] items-start relative size-full">
        <div className="h-[85px] relative shrink-0 w-[159px]" data-name="Frame 24 1">
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
    </div>
  );
}

export default function DesktopHome() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Home">
      <Header className="absolute h-[85px] left-[60px] top-[50px] w-[1334px]" />
      <Title className="absolute left-[60px] top-[616px] w-[1334px]" />
      <div className="absolute h-[598px] left-[calc(58.33%+25px)] top-[141px] w-[518px]" data-name="Gif Flower">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[139.3%] left-[-30.5%] max-w-none top-[-16.22%] w-[160.81%]" src={imgGifFlower} />
        </div>
      </div>
    </div>
  );
}