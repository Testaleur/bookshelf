// document.getElementById("changeColorButton").addEventListener("click", function () {
//     // Change the CSS variable value
//     document.documentElement.style.setProperty('--button-color', '#ff5722'); // New color (e.g., orange)
// });

// load books
fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const shelvesContainer = document.getElementById('shelvesContainer');
        let currentShelf = createShelf(); // first shelf
        shelvesContainer.appendChild(currentShelf);
        const shelfWidth = currentShelf.offsetWidth;

        let currentWidth = 0; // width of all books

        data.forEach((book) => {
            // new book
            const bookButton = document.createElement('button');
            bookButton.className = 'book';
            bookButton.textContent = book.title;
            bookButton.addEventListener('click', function() {
                openPage(`Book description: ${bookButton.textContent.trim()}`);
            });

            // books total width
            currentShelf.appendChild(bookButton);
            const bookWidth = bookButton.offsetWidth + 3;

            // check if it fits
            currentShelf.removeChild(bookButton);
            if (currentWidth + bookWidth > shelfWidth) {
                // doesnt fit => new shelf
                currentShelf = createShelf();
                shelvesContainer.appendChild(currentShelf);
                currentWidth = 0;
            }

            // add the book to the shelf
            currentShelf.appendChild(bookButton);
            currentWidth += bookWidth;
        });

        // min of 10 shelves
        const currentShelves = shelvesContainer.querySelectorAll('.shelf').length;
        for (let i = currentShelves; i < 10; i++) {
            shelvesContainer.appendChild(createShelf());
        }

    })
    .catch(error => console.error('Error loading books:', error));

// create new shelf
function createShelf() {
    const shelf = document.createElement('div');
    shelf.className = 'shelf';
    return shelf;
}