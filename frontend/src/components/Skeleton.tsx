import clsx from "clsx"
import { HTMLAttributes } from "react"

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={clsx("w-full rounded-lg bg-slate-300 animate-pulse", className)} {...props} />
}
