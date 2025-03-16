// open interface
document.getElementById("editBookBtn").addEventListener('click', () => {
    // hide the main book page during edition
    hideBookPage();
    openEditBookPage()
})

function openEditBookPage(){
    const editBookPage = document.getElementById('editBookPage');
    editBookPage.style.display = 'flex';
    preFillEditForm()

    const overlay = document.getElementById('overlayEditBook');
    overlay.style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
}

function closeEditBookPage(){
    document.getElementById('overlayEditBook').style.display = 'none';
    document.getElementById('editBookPage').style.display = 'none';
    clearForm()

    // make the page appear back
    showBookPage()
}

document.getElementById('closeEditBookBtn').addEventListener('click', function() {
    closeEditBookPage();
});

document.getElementById('saveEditionBtn').addEventListener('click', function() {
    saveEdition();
});

function saveEditionBtn(){
    sendBookToServer();
}

function clearForm(){
    titleInput.value = "";
    typeInput.selectedIndex = 0;
    authorInput.value = "";
    dateInput.value = "";
    ratingInput.value = 0;
    highlightStars()
    commentsInput.value = "";
}

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

// pre-filled the form with the book data
function preFillEditForm(){
    const bookTitleDisplay = document.getElementById('bookTitle');
    const bookTypeDisplay = document.getElementById('typeDisplay');
    const bookAuthorDisplay = document.getElementById('authorDisplay');
    const bookDateDisplay = document.getElementById('dateDisplay');
    const bookRatingDisplay = document.getElementById('ratingDisplay');
    const bookCommentsDisplay = document.getElementById('commentsDisplay');

    titleInput.value = bookTitleDisplay.textContent;
    typeInput.value = getValue(bookTypeDisplay)
    authorInput.value = getValue(bookAuthorDisplay)
    dateInput.value = getValue(bookDateDisplay)
    let currentRating = countSelectedStars()
    ratingInput.value = currentRating
    highlightStars(currentRating)
    commentsInput.value = getValue(bookCommentsDisplay);
}

function getValue(info){
    return info.textContent.slice(info.textContent.indexOf(":") + 2);
}

function countSelectedStars() {
    const stars = starsContainerDisplay.querySelectorAll('.star');
    let selectedCount = 0;
    stars.forEach(star => {
        if (star.classList.contains('selected')) {
            selectedCount++;
        }
    });
    return selectedCount;
}

function saveEdition(){
    const editedBookData = {
        title: titleInput.value,
        type : typeInput.value,
        author: authorInput.value,
        date: dateInput.value,
        rating: ratingInput.value,
        comments: commentsInput.value,
    };
    if(editedBookData.title != ""){
        if(editedBookData.type != ""){
            if(editedBookData.author != ""){
                if(editedBookData.date != ""){
                    fetch('/edit-book', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(editedBookData)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    
                    .then(dataReceived => {
                        closeEditBookPage();
                        closeBookPage();
                        hideBookByTitle(dataReceived.title)
                        let bookFormat = {
                            title : dataReceived.title,
                            type : dataReceived.type,
                            author : dataReceived.author,
                            date : dataReceived.date,
                            rating : dataReceived.rating,
                            comments : dataReceived.comments
                        }
                        addTheBookToPage(bookFormat, currentShelf, shelvesContainer)
                    })
                
                    .catch(error => {
                        console.error('Error making request:', error);
                    });

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
}