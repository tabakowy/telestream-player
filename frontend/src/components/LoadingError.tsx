import { IconFileAlert } from "@tabler/icons-react"
import clsx from "clsx"
import { HTMLAttributes } from "react"

type LoadingErrorProps = HTMLAttributes<HTMLDivElement>

export function LoadingError({ children, className, ...props }: LoadingErrorProps) {
  return (
    <div className={clsx("text-center bg-red-50 border-red-500 border-2 rounded-lg p-5", className)} {...props}>
      <IconFileAlert className="mx-auto mb-2 text-red-500" size={32} />
      <div className="text-xl font-bold text-red-500">Oops, couldn't load data. Try again.</div>
      {children}
    </div>
  )
}
