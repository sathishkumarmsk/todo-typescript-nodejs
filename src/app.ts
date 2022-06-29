import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 8000

app.use(cors())
app.use(todoRoutes)

const URI = 'mongodb+srv://sathish:msk@msk.sxiew.mongodb.net/todo-typescript-graphql?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(URI, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })