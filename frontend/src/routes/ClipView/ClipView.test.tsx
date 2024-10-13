import { http, HttpResponse } from "msw"
import { Route } from "react-router-dom"
import { afterEach, describe, expect, it, vi } from "vitest"

import { API_URL } from "@/ts/constants/api"
import { server } from "@/ts/mocks/server"
import { renderRoute, screen, waitFor } from "@/ts/testing"

import ClipView from "./ClipView"

vi.mock("@/components/LoadingError", () => ({
  LoadingError: () => <div>Loading Error</div>,
}))

describe("ClipView", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("fetches & renders clip", async () => {
    renderRoute(<Route path="/:clipId" element={<ClipView />} />, "/1")

    await waitFor(() => {
      expect(screen.getByText("Fetched clip 1")).toBeInTheDocument()
      expect(screen.getByTestId("video-player")).toBeInTheDocument()
    })
  })

  it("renders LoadingError component when there is an error", async () => {
    server.use(
      http.get(`${API_URL}/clips/1`, () => {
        return HttpResponse.json(null, { status: 500 })
      })
    )

    renderRoute(<Route path="/:clipId" element={<ClipView />} />, "/1")

    await waitFor(() => {
      expect(screen.getByText("Loading Error")).toBeDefined()
    })
  })
})
