import imgFrame241 from "./c06761a7de8a442cd6a45db796d69e4fa8bd0961.png";
import imgTool160616402 from "./57498c9e062e4022c566dc97ca419e4ddd84a7f4.png";
import imgRectangle16 from "./9132c13810b8cbde2c9bc7dc4a4c663a831efc1a.png";
import imgRectangle17 from "./0c88ce667d1bc948fc46228ac03a51abf09fe410.png";
import imgRectangle18 from "./80aa8ac5ddd2836431243e3325d0f92ed77c70d8.png";
import imgRectangle19 from "./850546b62d8fa683615b2abb4ca08568c0390177.png";
import imgRectangle20 from "./b3555b52c90124b3b6dd67f96aba2140412b8b23.png";
import imgRectangle21 from "./31aecbdfe14e4f31ffad56087c8b5d5d7999933d.png";
import imgRectangle22 from "./be67dbc000bbf29c86f810521c646ba6bafbb018.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.5px)] top-[250px]">
      <p className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[215px] leading-[normal] not-italic relative shrink-0 text-[150px] text-white w-[619px]">Futbolred</p>
    </div>
  );
}

function CoverAndroid() {
  return (
    <div className="h-[338px] overflow-clip relative shrink-0 w-[322px]" data-name="CoverAndroid">
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle16} />
      </div>
    </div>
  );
}

function CoverAndroid1() {
  return (
    <div className="h-[338px] overflow-clip relative shrink-0 w-[322px]" data-name="CoverAndroid">
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.06%] max-w-none top-0 w-[112.84%]" src={imgRectangle17} />
        </div>
      </div>
    </div>
  );
}

function CoverMaestro() {
  return (
    <div className="h-[337px] overflow-clip relative shrink-0 w-[234px]" data-name="CoverMaestro">
      <div className="absolute h-[338px] left-0 top-[0.5px] w-[234px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.84%] left-0 max-w-none top-[-22.96%] w-full" src={imgRectangle18} />
        </div>
      </div>
    </div>
  );
}

function CoverYoutube() {
  return (
    <div className="h-[338px] overflow-clip relative shrink-0 w-[322px]" data-name="Cover Youtube">
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.09%] max-w-none top-0 w-[153.42%]" src={imgRectangle19} />
        </div>
      </div>
    </div>
  );
}

function CoverAndroid2() {
  return (
    <div className="h-[338px] overflow-clip relative shrink-0 w-[322px]" data-name="CoverAndroid">
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle20} />
      </div>
    </div>
  );
}

function CoverMaestro1() {
  return (
    <div className="h-[337px] overflow-clip relative shrink-0 w-[234px]" data-name="CoverMaestro">
      <div className="absolute h-[338px] left-0 top-[0.5px] w-[234px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle21} />
      </div>
    </div>
  );
}

function CoverAndroid3() {
  return (
    <div className="h-[338px] overflow-clip relative shrink-0 w-[322px]" data-name="CoverAndroid">
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 mix-blend-darken overflow-hidden">
            <img alt="" className="absolute h-full left-[0.06%] max-w-none top-0 w-[112.84%]" src={imgRectangle22} />
          </div>
          <div className="absolute bg-[#302f2a] inset-0 mix-blend-screen" />
        </div>
      </div>
    </div>
  );
}

function Carrucel1() {
  return (
    <div className="content-stretch flex gap-[48px] h-[340px] items-center relative shrink-0 w-[2591px]" data-name="Carrucel">
      <CoverAndroid />
      <CoverAndroid1 />
      <CoverMaestro />
      <CoverYoutube />
      <p className="[word-break:break-word] font-['Abhaya_Libre_Medium:Regular',sans-serif] h-[52px] leading-[30px] not-italic relative shrink-0 text-[40px] text-black text-center w-[139px]">El Tiempo</p>
      <CoverAndroid2 />
      <CoverMaestro1 />
      <CoverAndroid3 />
    </div>
  );
}

function Carrucel() {
  return (
    <div className="absolute content-stretch flex gap-[47px] items-center left-[-1489px] top-[610px] w-[2460px]" data-name="Carrucel">
      <p className="[word-break:break-word] font-['Abhaya_Libre_Medium:Regular',sans-serif] h-[30px] leading-[30px] not-italic relative shrink-0 text-[40px] text-black text-center w-[89px]">Huge</p>
      <Carrucel1 />
    </div>
  );
}

export default function DesktopHover() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Hover 7">
      <Frame />
      <div className="absolute h-[85px] left-[60px] top-[50px] w-[1334px]" data-name="Header">
        <div className="content-stretch flex gap-[468px] items-start relative size-full">
          <div className="h-[85px] relative shrink-0 w-[159px]" data-name="Frame 24 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame241} />
          </div>
          <div className="[word-break:break-word] font-['Abhaya_Libre:Bold',sans-serif] h-[73px] leading-[0] not-italic relative shrink-0 text-[#302f2a] text-[24px] w-[87px] whitespace-pre-wrap">
            <p className="leading-[normal] mb-0">{`01. `}</p>
            <p className="leading-[normal]">Work</p>
          </div>
          <div className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[72px] leading-[0] not-italic relative shrink-0 text-[#302f2a] text-[24px] w-[152px] whitespace-pre-wrap">
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">{`About  me `}</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(75%+35px)] size-[66px] top-[828px]" data-name="tool_16061640 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTool160616402} />
      </div>
      <Carrucel />
    </div>
  );
}