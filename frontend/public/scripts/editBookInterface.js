// open interface
document.getElementById("editBookBtn").addEventListener('click', () => {
    // hide the main book page during edition
    hideBookPage();
    openEditBookPage()
})

function openEditBookPage(){
    console.log("opening")
    const editBookPage = document.getElementById('editBookPage');
    editBookPage.style.display = 'flex';
    // preFillEditForm()

    const overlay = document.getElementById('overlayEditBook');
    overlay.style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
}

function closeEditBookPage(){
    console.log("closing")
    document.getElementById('overlayEditBook').style.display = 'none';
    document.getElementById('editBookPage').style.display = 'none';
    // clearForm()

    // make the page appear back
    showBookPage()
}

document.getElementById('closeEditBookBtn').addEventListener('click', function() {
    closeEditBookPage();
});

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
    const dateInput = document.getElementById('dateInput');
    dateInput.value = getTodayDate();
}