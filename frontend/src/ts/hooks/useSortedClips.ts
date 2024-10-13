import { useMemo, useState } from "react"

import { Clip } from "../types/Clip"

export enum OrderBy {
  NAME = "name",
  DATE = "date",
}

export enum OrderDir {
  ASC = "asc",
  DESC = "desc",
}

export function useSortedClips(clips: Clip[]) {
  const [orderBy, setOrderBy] = useState(OrderBy.DATE)
  const [orderDir, setOrderDir] = useState(OrderDir.DESC)

  const sortedClips = useMemo(() => {
    return clips.sort((a, b) => {
      const [valueA, valueB] = orderDir === OrderDir.ASC ? [a, b] : [b, a]

      if (orderBy === OrderBy.DATE) {
        return Number(new Date(valueA.createdAt)) - Number(new Date(valueB.createdAt))
      }

      return valueA.title.localeCompare(valueB.title, undefined, { numeric: true })
    })
  }, [clips, orderBy, orderDir])

  return {
    orderBy,
    orderDir,
    setOrderBy,
    setOrderDir,
    sortedClips,
  }
}
