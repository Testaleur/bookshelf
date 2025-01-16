// load books
fetch('../data/books.json')
    .then(response => response.json())
    .then(data => {
        const shelvesContainer = document.getElementById('shelvesContainer');
        let currentShelf = createShelf(); // first shelf
        shelvesContainer.appendChild(currentShelf);
        const shelfWidth = currentShelf.offsetWidth;

        let currentWidth = 0; // width of all books

        data.forEach((book) => {
            prepareThePlaceForABook(book, currentShelf, shelvesContainer)
        });

        // // min of 10 shelves
        // const currentShelves = shelvesContainer.querySelectorAll('.shelf').length;
        // for (let i = currentShelves; i < 10; i++) {
        //     shelvesContainer.appendChild(createShelf());
        // }
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