function openPage(title, description) {
    const bookPage = document.getElementById('bookPage');
    const bookTitle = document.getElementById('bookTitle');
    const bookDescription = document.getElementById('bookDescription');
    bookTitle.textContent = title;
    bookDescription.innerHTML = description.replace(/\n/g, '<br>');

    bookPage.style.display = 'flex'; // box

    const overlay = document.getElementsByClassName('overlay');
    overlay[0].style.display = 'flex'; // no clicking on the shelves while its open
    document.body.style.overflow = 'hidden'; // no scrolling
}

document.getElementById('bookCloseBtn').addEventListener('click', function() {
    closeBookPage();
});

function closeBookPage(){
    document.getElementsByClassName('overlay')[0].style.display = 'none';
    document.getElementById('bookPage').style.display = 'none';
}

function addPageToABook(book, bookTitle, bookAuthor, bookDate, bookRating, bookComments) {
    book.addEventListener('click', function () {
        title = bookTitle.trim();
        description = `
            Author: ${bookAuthor.trim()}\n
            Finish Date: ${bookDate.trim()}\n
            Rating: ${
                bookRating == "Not specified"
                    ? "Not specified"
                    : "★".repeat(bookRating) + "☆".repeat(10 - bookRating)
            }\n
            Comments: ${bookComments.trim()}
        `;
        openPage(title, description);
    });
}