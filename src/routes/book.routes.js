import bookController from "../controller/book.controllers.js";
import { Router } from "express";
import { validate, validateBookId } from "../middlewares/validation.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router();

router.get("/", bookController.findAllBooksController);

router.use(authMiddleware);
router.post("/books", validate(bookSchema), authMiddleware, bookController.createBookController);

router.get("/search", bookController.searchBooksController);
router.get("/:id", validateBookId, bookController.findBookByIdController);
router.patch("/:id", authMiddleware, validateBookId, bookController.updateBookController);
router.delete("/:id", validateBookId, bookController.deleteBookController);


export default router