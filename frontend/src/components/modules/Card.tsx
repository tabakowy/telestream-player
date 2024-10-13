import clsx from "clsx"
import { HTMLAttributes } from "react"

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section
      className={clsx("flex gap-3 px-4 py-3 bg-white border rounded-lg border-slate-200 text-slate-md", className)}
      {...props}>
      {children}
    </section>
  )
}
