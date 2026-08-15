import svgPaths from "./svg-tx7gqaqu1c";

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

export default function DesktopHome() {
  return (
    <div className="bg-[#2f2e29] relative size-full" data-name="Desktop - Home">
      <Logo className="absolute inset-[36.72%_36.18%_43.65%_36.11%]" />
    </div>
  );
}