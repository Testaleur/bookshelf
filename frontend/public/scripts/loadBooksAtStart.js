// load books
fetch('../data/books.json')
    .then(response => response.json())
    .then(data => {
        const shelfWidth = currentShelf.offsetWidth;

        data.forEach((book) => {
            prepareThePlaceForABook(book, currentShelf, shelvesContainer)
        });
    })

    .catch(error => console.error('Error loading books:', error));

// create new shelf
function createShelf() {
    const shelf = document.createElement('div');
    shelf.className = 'shelf';
    return shelf;
}

function calculateCurrentWidth(currentShelf) {
    totalWidth = 0;
    
    const buttons = currentShelf.children;
    for (let button of buttons) {
        totalWidth += button.offsetWidth + 3;
    }
    return totalWidth; 
}