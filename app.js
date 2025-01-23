import express from "express";

import routerBooks from "./routes/booksRoute.js";

const app=express()

const port=process.env.PORT || 3000

app.use(express.static("public"))

app.use(express.json())

app.get("/", routerBooks);

app.use("/", routerBooks);





app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})