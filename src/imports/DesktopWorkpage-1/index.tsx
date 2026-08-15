import imgRectangle16 from "./9132c13810b8cbde2c9bc7dc4a4c663a831efc1a.png";
import imgRectangle17 from "./80aa8ac5ddd2836431243e3325d0f92ed77c70d8.png";
import imgRectangle18 from "./850546b62d8fa683615b2abb4ca08568c0390177.png";
import imgRedisenoEt081 from "./71494aec586ac7dcb19e6a7869db7c24c6699f71.png";
import imgFrame241 from "./c06761a7de8a442cd6a45db796d69e4fa8bd0961.png";

function Container() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[168px] top-[250px] w-[1104px]" data-name="Container">
      <p className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[215px] leading-[normal] not-italic relative shrink-0 text-[200px] text-white w-[449px]">Work</p>
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

function CoverMaestro() {
  return (
    <div className="h-[337px] overflow-clip relative shrink-0 w-[234px]" data-name="CoverMaestro">
      <div className="absolute h-[338px] left-0 top-[0.5px] w-[234px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.84%] left-0 max-w-none top-[-22.96%] w-full" src={imgRectangle17} />
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
          <img alt="" className="absolute h-full left-[0.09%] max-w-none top-0 w-[153.42%]" src={imgRectangle18} />
        </div>
      </div>
    </div>
  );
}

function CoverElTiempo() {
  return (
    <div className="bg-black h-[338px] overflow-clip relative shrink-0 w-[321px]" data-name="Cover El tiempo">
      <div className="absolute h-[245px] left-[64px] top-[41px] w-[137px]" data-name="RediseñoET.-08 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[177.22%] left-[-97.6%] max-w-none top-[-36.95%] w-[578.53%]" src={imgRedisenoEt081} />
        </div>
      </div>
      <div className="absolute border border-solid border-white h-[278px] left-[48px] top-[28px] w-[169px]" />
      <div className="absolute left-[127px] size-[8px] top-[293px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" id="Ellipse 21" r="3.5" stroke="white" />
        </svg>
      </div>
      <div className="absolute h-[245px] left-[260px] top-[41px] w-[137px]" data-name="RediseñoET.-08 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[177.22%] left-[-239.2%] max-w-none top-[-35.72%] w-[578.53%]" src={imgRedisenoEt081} />
        </div>
      </div>
      <div className="absolute border border-solid border-white h-[278px] left-[241px] top-[28px] w-[169px]" />
      <div className="absolute left-[320px] size-[8px] top-[293px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" id="Ellipse 21" r="3.5" stroke="white" />
        </svg>
      </div>
    </div>
  );
}

function Carrucel1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[974px]" data-name="Carrucel">
      <CoverAndroid />
      <CoverMaestro />
      <CoverYoutube />
      <p className="[word-break:break-word] font-['Abhaya_Libre_Medium:Regular',sans-serif] h-[52px] leading-[30px] not-italic relative shrink-0 text-[40px] text-black text-center w-[139px]">El Tiempo</p>
      <CoverElTiempo />
    </div>
  );
}

function Carrucel() {
  return (
    <div className="absolute content-stretch flex gap-[47px] items-center left-[60px] top-[616px] w-[1380px]" data-name="Carrucel">
      <p className="[word-break:break-word] font-['Abhaya_Libre_Medium:Regular',sans-serif] h-[30px] leading-[30px] not-italic relative shrink-0 text-[40px] text-black text-center w-[89px]">Huge</p>
      <Carrucel1 />
    </div>
  );
}

export default function DesktopWorkpage() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Workpage">
      <Container />
      <Carrucel />
      <div className="absolute left-[60px] top-[50px] w-[1334px]" data-name="Header">
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
    </div>
  );
}