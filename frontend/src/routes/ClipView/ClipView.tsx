import { IconHome } from "@tabler/icons-react"
import { Link, useParams } from "react-router-dom"

import { LoadingError } from "@/components/LoadingError"
import { Card } from "@/components/modules/Card"
import { Video } from "@/components/modules/Video"
import { Skeleton } from "@/components/Skeleton"
import { ClipsService } from "@/ts/services/ClipsService"

export default function ClipView() {
  const { clipId } = useParams()

  if (!clipId) {
    return null
  }

  return <ClipViewVideo clipId={clipId} />
}

function ClipViewVideo({ clipId }: { clipId: string }) {
  const { data: clip, isLoading, isError } = ClipsService.useOne(clipId)

  if (isLoading) {
    return <Skeleton className="h-80" />
  }

  if (isError) {
    return <LoadingError />
  }

  if (!clip) return null

  return (
    <>
      <Card className="flex items-center gap-2 mb-10">
        <Link to="/" className="flex items-center gap-1.5 text-blue-700 hover:underline">
          <IconHome size={16} />
          All videos
        </Link>

        <div className="text-slate-400">/</div>
        <h1 className="font-bold">{clip.title}</h1>
      </Card>

      <Video poster={clip.thumbnail} sources={clip.sources} />
    </>
  )
}
