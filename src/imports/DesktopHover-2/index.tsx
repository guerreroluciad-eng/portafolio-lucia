function Header() {
  return <div className="absolute h-[91px] left-[60px] opacity-50 top-[50px] w-[1334px]" data-name="Header" />;
}

export default function DesktopHover() {
  return (
    <div className="bg-[#e1dad0] relative size-full" data-name="Desktop - Hover">
      <div className="absolute bg-[#2f2e29] h-[365px] left-0 top-0 w-[1440px]" />
      <Header />
      <div className="absolute h-[598px] left-[calc(58.33%+25px)] top-[141px] w-[518px]" data-name="image_6483441 (71) 2" />
    </div>
  );
}