// add a book
document.getElementById('addBookButton').addEventListener('click', () => {
    const newBookData = {
        title: 'THIS IS A NEW BOOK'
    };

    fetch('/new-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookData)
    })

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })

    .then(dataReceived => {
        prepareThePlaceForABook(dataReceived)
    })

    .catch(error => {
        console.error('Error making request:', error);
    });

    // close the interface
    closeAddBookPage()
});

function prepareThePlaceForABook(dataReceived){
    const shelvesContainer = document.getElementById('shelvesContainer');
    let currentShelf = shelvesContainer.lastElementChild;
    addTheBookToPage(dataReceived, currentShelf, shelvesContainer)
}

function addTheBookToPage(book, currentShelf, shelvesContainer){

    bookTitle = book.title;
    bookAuthor = book.author? book.author : "Not specified";
    bookDate = book.date? book.date : "Not specified";
    bookRating = book.rating? book.rating : "Not specified";
    bookComments = book.comments? book.comments : "Not specified";
    // bookColor = book.color? book.color : Color(white);

    // new book
    const bookButton = document.createElement('button');
    bookButton.className = 'book';
    bookButton.textContent = bookTitle;
    addPageToABook(bookButton, bookTitle, bookAuthor, bookDate, bookRating, bookComments); // link the page you can open with details on the book

    // books total width
    currentShelf.appendChild(bookButton);
    const bookWidth = bookButton.offsetWidth + 3;

    // check if it fits
    currentShelf.removeChild(bookButton);
    const shelfWidth = currentShelf.offsetWidth;
    currentWidth = calculateCurrentWidth(currentShelf)
    if (currentWidth + bookWidth > shelfWidth) {
        // doesnt fit => new shelf
        currentShelf = createShelf();
        shelvesContainer.appendChild(currentShelf);
    }

    // add the book to the shelf
    currentShelf.appendChild(bookButton);
}

