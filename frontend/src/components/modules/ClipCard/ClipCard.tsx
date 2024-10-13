import { IconCalendar } from "@tabler/icons-react"
import { Link } from "react-router-dom"

import { Clip } from "@/ts/types/Clip"
import { formatDate } from "@/ts/utils/format"

export function ClipCard({ clip }: { clip: Clip }) {
  return (
    <Link to={`/${clip.id}`} key={clip.id} className="rounded-lg group">
      <ClipThumb title={clip.title} thumbnail={clip.thumbnail} />

      <div className="flex items-center gap-3 px-3 py-4">
        <h2 className="flex-1 font-bold line-clamp-2 text-slate-800">{clip.title}</h2>

        <div className="flex items-center gap-1 text-xs text-slate-600">
          <IconCalendar size={14} />
          {formatDate(clip.createdAt)}
        </div>
      </div>
    </Link>
  )
}

type ClipThumbProps = Pick<Clip, "title" | "thumbnail">

function ClipThumb({ title, thumbnail }: ClipThumbProps) {
  return (
    <div className="relative flex rounded-lg h-60">
      <img
        alt={title}
        src={thumbnail}
        className="w-full object-cover transition-all group-hover:scale-[1.025] group-hover:saturate-50 z-10 rounded-lg"
      />

      <img
        alt=""
        src={thumbnail}
        className="absolute transition-opacity opacity-0 size-full blur-xl group-hover:opacity-100"
        aria-hidden
      />
    </div>
  )
}
