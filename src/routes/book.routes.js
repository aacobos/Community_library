import bookController from "../controller/book.controllers.js";
import { Router } from "express";
import { validate } from "../middlewares/validation.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router();

router.get("/books", bookController.findAllBooksController);

router.use(authMiddleware);
router.post("/books", validate(bookSchema), authMiddleware, bookController.createBookController);

export default router