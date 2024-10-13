import { ReactNode } from "react"

export function renderSkeleton(Skeleton: () => ReactNode, count: number) {
  return [...Array(count).keys()].map((id) => <Skeleton key={id} />)
}
