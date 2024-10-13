import { IconSortAscending, IconSortDescending } from "@tabler/icons-react"
import { ButtonHTMLAttributes, useContext } from "react"

import { OrderBy, OrderDir } from "@/ts/hooks/useSortedClips"
import { cn } from "@/ts/utils/cn"

import { ClipsNavbarContext, ClipsNavbarContextType } from "./ClipsNavbar"

type OrderByButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  orderType: OrderBy
  defaultOrderDir: OrderDir
}

export function OrderByButton({ defaultOrderDir, children, className, orderType, ...props }: OrderByButtonProps) {
  const { orderBy, orderDir, setOrderBy, setOrderDir } = useContext(ClipsNavbarContext) as ClipsNavbarContextType

  const isActive = orderType === orderBy
  const isAsc = orderDir === OrderDir.ASC

  function updateOrder() {
    if (isActive) {
      setOrderDir(isAsc ? OrderDir.DESC : OrderDir.ASC)
    } else {
      setOrderBy(orderType)
      setOrderDir(defaultOrderDir)
    }
  }

  return (
    <button
      type="button"
      onClick={updateOrder}
      className={cn(
        "flex items-center gap-2 font-bold text-slate-800 hover:underline hover:text-slate-950 px-1",
        isActive && "text-blue-600 hover:text-blue-800",
        className
      )}
      {...props}>
      {children}

      {isActive && <>{isAsc ? <IconSortAscending size={18} /> : <IconSortDescending size={18} />}</>}
    </button>
  )
}
