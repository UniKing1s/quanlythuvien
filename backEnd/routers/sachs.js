import express from "express";
import {
  createBook,
  deleteBook,
  getBookByMaSach,
  getBooks,
  updateBook,
} from "../controllers/sachController.js";

const router = express.Router();

//get books
router.get("/", getBooks);
//create book
router.post("/", createBook);
// router.delete("/product", deleteProduct);
//delete book
router.delete("/", deleteBook);
//update book
router.patch("/", updateBook);
//get book by _Id
router.put("/byId/", getBookByMaSach);
export default router;
