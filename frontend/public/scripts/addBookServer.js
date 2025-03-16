// add a book
const titleInput = document.getElementById('titleInput');
const typeInput = document.getElementById('typeInput');
const authorInput = document.getElementById('authorInput');
const dateInput = document.getElementById('dateInput');
const ratingInput = document.getElementById('ratingInput');
const commentsInput = document.getElementById('commentsInput');

document.getElementById('addBookButton').addEventListener('click', () => {
    const newBookData = {
        title: titleInput.value,
        type : typeInput.value,
        author: authorInput.value,
        date: dateInput.value,
        rating: ratingInput.value,
        comments: commentsInput.value,
    };
    console.log(newBookData.type)
    if(newBookData.title != ""){
        if(newBookData.type != ""){
            if(newBookData.author != ""){
                if(newBookData.date != ""){
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
                } else {
                    console.log("please fill up the date field")
                }
            } else {
                console.log("please fill up the author field")
            }
        } else {
            console.log("please fill up the type field")
        }
    } else {
        console.log("please fill up the title field")
    }
});

function prepareThePlaceForABook(dataReceived){
    addTheBookToPage(dataReceived, currentShelf, shelvesContainer)
}

function addTheBookToPage(book, currentShelf, shelvesContainer){
    bookTitle = book.title;
    bookType = book.type? book.type : "Book";
    bookAuthor = book.author? book.author : "Not specified";
    bookDate = book.date? book.date : "Not specified";
    bookRating = book.rating && book.rating != 0? book.rating : "0";
    bookComments = book.comments? book.comments : "-";
    // bookColor = book.color? book.color : Color(white);

    // new book
    const bookButton = document.createElement('button');
    bookButton.className = 'book';
    bookButton.id = bookTitle ;
    bookButton.textContent = bookTitle;
    bookButton.classList.add(bookType)
    addPageToABook(bookButton, bookTitle, bookType, bookAuthor, bookDate, bookRating, bookComments); // link the page you can open with details on the book

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

