import imgImage6483441712 from "./0ebcef0a8e9c8f8ba55d004f48e69fa0ca22e4d3.png";
import imgTool160616402 from "./57498c9e062e4022c566dc97ca419e4ddd84a7f4.png";

function Header() {
  return <div className="absolute h-[85px] left-[60px] top-[50px] w-[1334px]" data-name="Header" />;
}

function Title() {
  return <div className="absolute h-[315px] left-[60px] top-[667px] w-[1334px]" data-name="title1" />;
}

export default function DesktopHome() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Home">
      <Header />
      <Title />
      <div className="absolute h-[598px] left-[calc(58.33%+25px)] top-[141px] w-[518px]" data-name="image_6483441 (71) 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[200.08%] left-[-67.69%] max-w-none top-[-37.13%] w-[230.78%]" src={imgImage6483441712} />
        </div>
      </div>
      <div className="absolute left-[calc(41.67%+65px)] size-[66px] top-[794px]" data-name="tool_16061640 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTool160616402} />
      </div>
    </div>
  );
}