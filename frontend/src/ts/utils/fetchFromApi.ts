import { API_URL } from "../constants/api"

/* NOTE:
  For sake of simplicity, this function handles only GET method.
  It should be extended to handle other methods and errors.
*/

export async function fetchFromApi<T>(url: string) {
  const response = await fetch(`${API_URL}/${url}`)

  if (!response.ok || response.status >= 400) {
    throw new Error(response.statusText)
  }

  const json = await response.json()

  return {
    json: json as T,
    ok: response.ok,
    code: response.status,
  }
}
