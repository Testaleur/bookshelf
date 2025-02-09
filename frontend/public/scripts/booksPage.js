function openPage(title, type, author, date, bookRating, comments, bookType) {

    const bookPage = document.getElementById('bookPage');
    const bookTitleDisplay = document.getElementById('bookTitle');
    const bookTypeDisplay = document.getElementById('typeDisplay');
    const bookAuthorDisplay = document.getElementById('authorDisplay');
    const bookDateDisplay = document.getElementById('dateDisplay');
    const bookRatingDisplay = document.getElementById('ratingDisplay');
    const bookCommentsDisplay = document.getElementById('commentsDisplay');

    bookTitleDisplay.textContent = title;
    bookTypeDisplay.innerHTML = "Type : " + type;
    bookAuthorDisplay.innerHTML = "Author : " + author;
    bookDateDisplay.innerHTML = "Date : " + date;
    highlightStarsDisplayed(bookRating);
    bookCommentsDisplay.innerHTML = "Comments : " + comments;

    bookPage.style.display = 'flex'; // box 
    bookPage.classList.add(bookType=="Not specified" ? "Book" : bookType);

    const overlay = document.getElementById('overlayBookPage');
    overlay.style.display = 'flex'; // no clicking on the shelves while its open
    document.body.style.overflow = 'hidden'; // no scrolling
}

document.getElementById('bookCloseBtn').addEventListener('click', function() {
    closeBookPage();
});

function closeBookPage(){
    document.getElementById('overlayBookPage').style.display = 'none';
    bookPage = document.getElementById('bookPage')
    bookPage.style.display = 'none';
    bookPage.classList.remove(bookPage.classList[bookPage.classList.length - 1]);
    resetButtonDelete()
    highlightStarsDisplayed()
}

function addPageToABook(book, bookTitle, bookType, bookAuthor, bookDate, bookRating, bookComments) {
    book.addEventListener('click', function () {
        title = bookTitle.trim();
        type = bookType.trim()
        author = bookAuthor.trim()
        date = bookDate.trim()
        rating = bookRating.trim() 
        comments = bookComments.trim()

        openPage(title, type, author, date, rating, comments, bookType);
    });
}

function hideBookPage(){
    document.getElementById('bookPage').style.display = 'none';
    // document.getElementById('overlayBookPage').style.display = 'none';
}

function showBookPage(){
    document.getElementById('bookPage').style.display = 'flex';
    // document.getElementById('overlayBookPage').style.display = 'flex';
}