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

async function findBookByIdService(bookId) {
    const book = await bookRepository.findBookByIdRepository(bookId);
    if (!book) throw new Error("Book not found");
    return book;
}

async function updateBookService(updatedBook, bookId, userId) {
    const book = await bookRepository.findBookByIdRepository(bookId);
    if (!book) throw new Error("Book not found");
    if (book.userId !== userId) throw new Error("Unauthorized");
    const response = await bookRepository.updateBookRepository(updatedBook, bookId);
    return response
}

async function deleteBookService(bookId, userId) {
    const book = await bookRepository.findBookByIdRepository(bookId);
    if (!book) throw new Error("Book not found");
    if (book.userId !== userId) throw new Error("Unauthorized");
    const response = await bookRepository.deleteBookRepository(bookId);
    return response;
}

async function searchBooksService(search) {
    if (!search) return await bookRepository.findAllBooksRepository();
    const books = await bookRepository.searchBooksRepository(search);
    return books;
}


export default {
    createBookService,
    findAllBooksService,
    findBookByIdService,
    updateBookService,
    deleteBookService,
    searchBooksService
}

