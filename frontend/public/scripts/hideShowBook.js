function showBook(book){
    addTheBookToPage(book, currentShelf, shelvesContainer)
}

function hideBookByTitle(bookTitle){ // should do this by ID
    Array.from(shelvesContainer.children).forEach(shelf => {
        Array.from(shelf.children).forEach(book => {
            if (book.id === bookTitle) {
                shelf.removeChild(book);
            }
        });
    });
}