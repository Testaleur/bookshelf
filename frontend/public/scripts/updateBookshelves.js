// data to know how to display books
const currentFilteringOptions = {
    type : "Any"
}

const currentSortingOptions = {
    type : "None"
}

var shelvesContainer = document.getElementById('shelvesContainer');
var currentShelf = createShelf(); // first shelf
shelvesContainer.appendChild(currentShelf);

function updateBookshelves(){

    fetch('../data/books.json')
    .then(response => response.json())
    .then(data => {
        clearShelves()

        const shelfWidth = currentShelf.offsetWidth;

        let currentWidth = 0; // width of all books

        data.forEach((book) => {
            // still need to add the sorting option here
            if(currentFilteringOptions.type == "Any"){
                prepareThePlaceForABook(book, currentShelf, shelvesContainer)
            } else if(book.type == currentFilteringOptions.type){ // filtered type
                prepareThePlaceForABook(book, currentShelf, shelvesContainer)
            } // else : we do not show the book
        });
    })

    .catch(error => console.error('Error loading books:', error));
}

function clearShelves() {
    Array.from(shelvesContainer.children).forEach(shelf => {
        Array.from(shelf.children).forEach(book => {
            shelf.removeChild(book);
        });
    });
}