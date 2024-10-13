import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, RenderOptions } from "@testing-library/react"
import { ReactElement } from "react"
import { MemoryRouter, Routes } from "react-router-dom"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const renderRoute = (ui: ReactElement, route: string, options?: Omit<RenderOptions, "wrapper">) => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>{children}</Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  return {
    ...render(ui, { wrapper, ...options }),
  }
}
