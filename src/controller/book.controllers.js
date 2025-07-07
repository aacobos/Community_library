import bookService from "../service/book.services.js";

async function createBookController(req, res) {
    const newBook = req.body;
    const userId = req.userId;

    try {
        const createBook = await bookService.createBookService(newBook, userId);
        res.status(201).send(createBook);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function findAllBooksController(req, res) {
    try {
        const books = await bookService.findAllBooksService();
        res.send(books);
    } catch (error) {
        res.status(400).send(error.message);
    }    
}

export default {
    createBookController,
    findAllBooksController
}