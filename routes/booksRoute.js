import express from "express";
import { show } from "../controllers/booksC.js";
import { index } from "../controllers/booksC.js";

const routerBooks = express.Router();

routerBooks.get("/",index);

routerBooks.get("/:id", show)

export default routerBooks;