import svgPaths from "./svg-n60ry0a0c8";
import imgFrame241 from "./c06761a7de8a442cd6a45db796d69e4fa8bd0961.png";
import imgRedisenoEt081 from "./71494aec586ac7dcb19e6a7869db7c24c6699f71.png";
import imgCapturaDePantalla20260731ALas121149PM1 from "./f6703c5203d5b07c61c5b7a69666206735f9833f.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(8.33%+46px)] top-[249px] w-[1180px]">
      <p className="[word-break:break-word] font-['Abhaya_Libre:Regular',sans-serif] h-[215px] leading-[normal] not-italic relative shrink-0 text-[200px] text-white w-[449px]">Work</p>
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

function CoverApp() {
  return (
    <div className="h-[338px] relative shrink-0 w-[234px]" data-name="Cover App">
      <svg className="absolute block inset-0 size-full" fill="none" height="338" preserveAspectRatio="none" viewBox="0 0 234 338" width="234">
        <g clipPath="url(#clip0_0_8)" id="Cover App">
          <rect fill="black" height="338" width="234" />
          <circle cx="324" cy="297" id="Ellipse 22" r="3.5" stroke="white" />
          <path d={svgPaths.p2ba39200} fill="white" id="A (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="338" width="234" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CoverFutbolred() {
  return (
    <div className="bg-black h-[338px] overflow-clip relative shrink-0 w-[321px]" data-name="Cover Futbolred">
      <div className="absolute border border-solid border-white h-[252px] left-[60px] rounded-[20px] top-[41px] w-[318px]" />
      <div className="absolute left-[320px] size-[8px] top-[293px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" id="Ellipse 21" r="3.5" stroke="white" />
        </svg>
      </div>
      <div className="absolute h-[192px] left-[93px] top-[71px] w-[268px]" data-name="Captura de pantalla 2026-07-31 a las 12.11.49 p. m. 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.49%] left-[-2.61%] max-w-none top-[-4.72%] w-[102.61%]" src={imgCapturaDePantalla20260731ALas121149PM1} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <CoverElTiempo />
      <CoverApp />
      <CoverFutbolred />
    </div>
  );
}

function Carrucel() {
  return (
    <div className="absolute content-stretch flex gap-[47px] items-center left-[60px] top-[616px] w-[1380px]" data-name="Carrucel">
      <p className="[word-break:break-word] font-['Abhaya_Libre_Medium:Regular',sans-serif] h-[56px] leading-[30px] not-italic relative shrink-0 text-[40px] text-black text-center w-[139px]">El Tiempo</p>
      <Frame1 />
    </div>
  );
}

export default function DesktopHome() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Home">
      <Frame />
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
      <Carrucel />
    </div>
  );
}