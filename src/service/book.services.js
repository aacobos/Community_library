import bookRepository from "../repositories/book.repositories.js"

async function createBookService(newBook, userId) {
    const createBook = await bookRepository.createBookRepository(
        newBook,
        userId
    );
    if (!createBook) throw new Error("Error creating Book");
    return createBook;
}

async function findAllBooksService() {
    const books = await bookRepository.findAllBooksRepository();
    return books
}


export default {
    createBookService,
    findAllBooksService
}

