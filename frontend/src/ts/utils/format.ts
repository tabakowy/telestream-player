export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US")
}

export function formatVideoTime(time: number) {
  const [hours, minutes, seconds] = new Date(1000 * time).toISOString().substring(11, 19).split(":")

  if (Number(hours) > 0) {
    return `${hours}:${minutes}:${seconds}`
  }

  return `${minutes}:${seconds}`
}
