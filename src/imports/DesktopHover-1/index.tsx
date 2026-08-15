import imgImage6483441712 from "./0ebcef0a8e9c8f8ba55d004f48e69fa0ca22e4d3.png";

function Header() {
  return <div className="absolute h-[91px] left-[60px] top-[50px] w-[1334px]" data-name="Header" />;
}

function Title() {
  return <div className="absolute h-[315px] left-[60px] top-[667px] w-[1334px]" data-name="title1" />;
}

export default function DesktopHover() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Hover">
      <div className="absolute bg-[#2f2e29] h-[104px] left-0 top-[37px] w-[1440px]" />
      <Header />
      <Title />
      <div className="absolute h-[598px] left-[calc(58.33%+25px)] top-[141px] w-[518px]" data-name="image_6483441 (71) 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[200.08%] left-[-67.69%] max-w-none top-[-37.13%] w-[230.78%]" src={imgImage6483441712} />
        </div>
      </div>
    </div>
  );
}