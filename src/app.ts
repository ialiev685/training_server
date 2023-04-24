import express from "express"
const app = express()

const port = 3000

app.use((req, res, next) => {
  console.log("middleware")
  next()
})

app.get("/", (req, res) => {
  const text = "Hello world"
  res.send(text)
})

app.listen(port, () => console.log(`Запущен порт ${port}`))
