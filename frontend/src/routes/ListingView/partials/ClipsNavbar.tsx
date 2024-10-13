import { createContext, Dispatch, SetStateAction } from "react"

import { Card } from "@/components/modules/Card"
import { OrderBy, OrderDir } from "@/ts/hooks/useSortedClips"

import { OrderByButton } from "./OrderByButton"

export type ClipsNavbarContextType = {
  orderBy: OrderBy
  orderDir: OrderDir
  setOrderBy: Dispatch<SetStateAction<OrderBy>>
  setOrderDir: Dispatch<SetStateAction<OrderDir>>
}

export const ClipsNavbarContext = createContext<ClipsNavbarContextType | null>(null)

export function ClipsNavbar() {
  return (
    <Card className="flex gap-3">
      <div className="text-slate-700">Order by:</div>

      <OrderByButton orderType={OrderBy.NAME} defaultOrderDir={OrderDir.ASC}>
        Title
      </OrderByButton>

      <OrderByButton orderType={OrderBy.DATE} defaultOrderDir={OrderDir.DESC}>
        Date
      </OrderByButton>
    </Card>
  )
}
