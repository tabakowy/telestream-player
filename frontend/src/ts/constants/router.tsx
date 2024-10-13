import { createBrowserRouter, Outlet } from "react-router-dom"

import { AppLayout } from "@/components/layouts/AppLayout"
import ClipView from "@/routes/ClipView/ClipView"
import ListingView from "@/routes/ListingView/ListingView"

export const router = createBrowserRouter([
  {
    element: <AppLayout children={<Outlet />} />,
    children: [
      {
        path: "/",
        element: <ListingView />,
      },
      {
        path: "/:clipId",
        element: <ClipView />,
      },
    ],
  },
])
