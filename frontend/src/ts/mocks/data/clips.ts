const DEFAULT_CLIP = {
  thumbnail: "https://www.hdwallpapersfreedownload.com/uploads/large/cartoons/tom-and-jerry-wallpaper.jpg",
  sources: [
    {
      url: "https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164",
      type: "video/mp4",
    },
  ],
} as const

export const CLIPS = [
  {
    ...DEFAULT_CLIP,
    id: "3431013c-6633-4e1d-a61f-8b135feb9867",
    title: "Fetched clip 1",
    createdAt: "2024-04-23T14:40:59Z",
  },
  {
    ...DEFAULT_CLIP,
    id: "1b858085-4b4c-4d7b-ac64-8582b676de45",
    title: "Fetched clip 2",
    createdAt: "2024-02-05T15:53:50Z",
  },
] as const
