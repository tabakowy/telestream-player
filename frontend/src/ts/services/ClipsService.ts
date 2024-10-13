import { useQuery } from "@tanstack/react-query"

import { Clip } from "@/ts/types/Clip"
import { fetchFromApi } from "@/ts/utils/fetchFromApi"

export const ClipsService = {
  useAll() {
    return useQuery({
      queryKey: ["clips"],
      queryFn: async () => {
        return (await fetchFromApi<{ data: Clip[] }>("clips")).json.data
      },
    })
  },

  useOne(clipId: string) {
    return useQuery({
      queryKey: ["clip", clipId],
      queryFn: async () => {
        return (await fetchFromApi<{ data: Clip }>(`clips/${clipId}`)).json.data
      },
    })
  },
}
