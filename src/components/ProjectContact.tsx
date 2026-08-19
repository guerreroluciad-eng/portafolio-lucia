// ─── Project Contact CTA ────────────────────────────────────────────────────
// Closing "let's talk" block. Shared across project pages.

interface ProjectContactProps {
  message: string
  textColor?: string
  buttonColor?: string
  buttonHoverBg?: string
  buttonHoverText?: string
  onNextClick?: () => void
  nextLabel?: string
}

export default function ProjectContact({
  message,
  textColor = '#2f2e29',
  buttonColor = '#302f2a',
  buttonHoverBg = '#302f2a',
  buttonHoverText = 'white',
  onNextClick,
  nextLabel = 'Next page',
}: ProjectContactProps) {
  const buttonClassName = "h-[50px] rounded-[36px] px-[27px] font-['Abhaya_Libre',serif] text-[24px] bg-transparent cursor-pointer inline-flex items-center justify-center no-underline"
  const buttonStyle = { color: buttonColor, borderWidth: '1px', borderStyle: 'solid', borderColor: buttonColor, transition: 'background 0.2s, color 0.2s' }
  const onButtonMouseEnter = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.background = buttonHoverBg; (e.currentTarget as HTMLElement).style.color = buttonHoverText }
  const onButtonMouseLeave = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = buttonColor }

  return (
    <div className="flex flex-col gap-[24px] items-start w-full max-w-[934px] px-[25px] lg:px-0">
      <p className="font-['Abhaya_Libre',serif] text-[32px] leading-normal" style={{ color: textColor }}>
        {message}
      </p>
      <div className="flex flex-wrap gap-[16px] items-center">
        <a
          href="mailto:guerreroluciad@gmail.com"
          className={buttonClassName}
          style={buttonStyle}
          onMouseEnter={onButtonMouseEnter}
          onMouseLeave={onButtonMouseLeave}
        >
          Contact me
        </a>
        {onNextClick && (
          <button
            onClick={onNextClick}
            className={buttonClassName}
            style={buttonStyle}
            onMouseEnter={onButtonMouseEnter}
            onMouseLeave={onButtonMouseLeave}
          >
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  )
}
