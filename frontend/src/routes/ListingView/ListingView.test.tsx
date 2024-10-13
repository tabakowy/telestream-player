import { http, HttpResponse } from "msw"
import { Route } from "react-router-dom"
import { afterEach, describe, expect, it, vi } from "vitest"

import { API_URL } from "@/ts/constants/api"
import { server } from "@/ts/mocks/server"
import { renderRoute, screen, waitFor } from "@/ts/testing"

import ListingView from "./ListingView"

vi.mock("@/components/LoadingError", () => ({
  LoadingError: () => <div>Loading Error</div>,
}))

describe("ListingView", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("fetches & renders clips", async () => {
    renderRoute(<Route path="/" element={<ListingView />} />, "/")

    await waitFor(() => {
      expect(screen.getByText("Fetched clip 1")).toBeInTheDocument()
    })
  })

  it("renders LoadingError component when there is an error", async () => {
    server.use(
      http.get(`${API_URL}/clips`, () => {
        return HttpResponse.json(null, { status: 500 })
      })
    )

    renderRoute(<Route path="/" element={<ListingView />} />, "/")

    await waitFor(() => {
      expect(screen.getByText("Loading Error")).toBeDefined()
    })
  })

  it('renders "No clips to display" when there are no clips', async () => {
    server.use(
      http.get(`${API_URL}/clips`, () => {
        return HttpResponse.json({ data: [] })
      })
    )

    renderRoute(<Route path="/" element={<ListingView />} />, "/")

    await waitFor(() => {
      expect(screen.getByText("No clips to display")).toBeInTheDocument()
    })
  })
})
