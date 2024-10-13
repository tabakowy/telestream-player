import "@testing-library/jest-dom"

import * as matchers from "@testing-library/jest-dom/matchers"
import { afterAll, afterEach, beforeAll, expect } from "vitest"

import { server } from "./ts/mocks/server"

expect.extend(matchers)

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})
