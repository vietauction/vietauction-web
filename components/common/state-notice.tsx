import Link from "next/link"
import { AlertCircle, Inbox, ShieldAlert } from "lucide-react"

type StateNoticeProps = {
  kind?: "empty" | "error" | "permission"
  title: string
  description: string
  action?: { label: string; href: string }
}

export function StateNotice({
  kind = "empty",
  title,
  description,
  action,
}: StateNoticeProps) {
  const Icon =
    kind === "error" ? AlertCircle : kind === "permission" ? ShieldAlert : Inbox
  return (
    <div className="va-card flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center">
      <span className="mb-5 inline-flex size-12 items-center justify-center border border-border bg-muted text-secondary">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h2 className="text-2xl font-bold tracking-[-0.03em] text-primary">
        {title}
      </h2>
      <p className="mt-3 max-w-lg text-muted-foreground">{description}</p>
      {action ? (
        <Link href={action.href} className="va-button-primary mt-7">
          {action.label}
        </Link>
      ) : null}
    </div>
  )
}
