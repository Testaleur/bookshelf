import express from 'express';
import { addBook, getData } from '../controllers/books.controller.js';

export const router = express.Router();

// get all the books saved in the json
router.get("/data", getData);

// // add a book to the json
router.post("/new-book", addBook);

export default router;