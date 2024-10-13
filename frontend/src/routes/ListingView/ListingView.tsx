import { IconBox } from "@tabler/icons-react"

import { LoadingError } from "@/components/LoadingError"
import { useSortedClips } from "@/ts/hooks/useSortedClips"
import { ClipsService } from "@/ts/services/ClipsService"

import { Clips } from "./partials/Clips"
import { ClipsNavbar, ClipsNavbarContext } from "./partials/ClipsNavbar"

export default function ListingView() {
  const { data: clips = [], isLoading, isError } = ClipsService.useAll()
  const { orderBy, orderDir, setOrderBy, setOrderDir, sortedClips } = useSortedClips(clips)

  if (isError) {
    return <LoadingError />
  }

  if (!isError && !isLoading && clips.length === 0) {
    return (
      <div className="py-10 text-xl text-center text-slate-600">
        <IconBox className="mx-auto mb-3" />
        <div>No clips to display</div>
      </div>
    )
  }

  return (
    <div className="grid gap-10">
      <ClipsNavbarContext.Provider
        value={{
          orderBy,
          orderDir,
          setOrderBy,
          setOrderDir,
        }}>
        <ClipsNavbar />
      </ClipsNavbarContext.Provider>

      <section className="grid gap-10 lg:grid-cols-3">
        <Clips clips={sortedClips} isLoading={isLoading} />
      </section>
    </div>
  )
}
