export type Clip = {
  id: string
  title: string
  createdAt: string
  thumbnail: string
  sources: Array<{
    url: string
    type: string
  }>
}
