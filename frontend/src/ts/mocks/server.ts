import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"

import { API_URL } from "../constants/api"
import { CLIPS } from "./data/clips"

export const restHandlers = [
  http.get(`${API_URL}/clips`, () => {
    return HttpResponse.json({ data: CLIPS })
  }),

  http.get(`${API_URL}/clips/:id`, () => {
    return HttpResponse.json({ data: CLIPS[0] })
  }),
]

export const server = setupServer(...restHandlers)
