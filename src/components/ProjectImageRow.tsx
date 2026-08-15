// ─── Project Image Row ──────────────────────────────────────────────────────
// Row of 3 preview images below the title. Shared layout across project
// pages — each slot's own crop/background treatment is passed as children.

export function ProjectImageRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[24px] md:gap-[63px] lg:gap-[63px] items-center justify-center mb-[68px] w-full max-w-[1098px] px-4 md:px-[25px] lg:px-0">
      {children}
    </div>
  )
}

export function ProjectImageBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[calc((100vw-80px)/3)] aspect-[90/89] md:aspect-auto md:h-[153px] md:w-[154px] lg:h-[338px] lg:w-[324px] relative shrink-0 overflow-hidden">
      {children}
    </div>
  )
}
