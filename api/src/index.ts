import express from "express"
import { CLIPS } from "./clips"

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get("/api/clips", (_, res) => {
  res.json({ data: CLIPS })
})

app.get("/api/clips/:id", (req, res) => {
  const clip = CLIPS.find((clip) => clip.id === req.params.id)

  if (!clip) {
    res.sendStatus(404)
    return
  }

  res.json({ data: CLIPS.find((clip) => clip.id === req.params.id) })
})
