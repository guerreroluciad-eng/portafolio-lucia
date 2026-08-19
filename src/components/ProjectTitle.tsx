// ─── Project Title ──────────────────────────────────────────────────────────
// Previously rendered the company label + giant hover-color case title above
// ProjectMeta. Both were removed from every project page's visible content
// (per request), but call sites (`<ProjectTitle company=... title=... />`)
// were intentionally left in place across all case pages — this component is
// kept as a no-op so existing and future pages built from the same template
// don't need editing. The header-to-ProjectMeta spacing this used to provide
// is now owned by ProjectMeta's own top margin.

interface ProjectTitleProps {
  company: string
  title: string
  companyColor?: string
  titleColor?: string
  titleHoverColor?: string
}

export default function ProjectTitle(_props: ProjectTitleProps) {
  return null
}
