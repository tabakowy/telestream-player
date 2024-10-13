import { ClipCard } from "@/components/modules/ClipCard"
import { Skeleton } from "@/components/Skeleton"
import { Clip } from "@/ts/types/Clip"
import { renderSkeleton } from "@/ts/utils/renderSkeleton"

type ClipsProps = {
  clips: Clip[]
  isLoading: boolean
}

export function Clips({ clips, isLoading }: ClipsProps) {
  if (isLoading) {
    return renderSkeleton(ClipSkeleton, 9)
  }

  return clips.map((clip) => <ClipCard clip={clip} key={clip.id} />)
}

function ClipSkeleton() {
  return <Skeleton className="h-72" />
}
