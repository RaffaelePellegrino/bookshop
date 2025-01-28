import express from "express";
import { show } from "../controllers/booksC.js";
import { index } from "../controllers/booksC.js";
import { store } from "../controllers/booksC.js";
const routerBooks = express.Router();

routerBooks.get("/",index);

routerBooks.get("/:id", show)

routerBooks.post("/:id", store)
export default routerBooks;