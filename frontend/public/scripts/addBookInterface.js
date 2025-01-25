// open interface
document.getElementById("addBookOpenInterface").addEventListener('click', () => {
    openAddBookInterface()
})

function openAddBookInterface(){
    const newBookPage = document.getElementById('newBookPage');
    newBookPage.style.display = 'flex';
    preFillForm()

    const overlay = document.getElementsByClassName('overlay');
    overlay[1].style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
}

function closeAddBookPage(){
    document.getElementsByClassName('overlay')[1].style.display = 'none';
    document.getElementById('newBookPage').style.display = 'none';
    clearForm()
}

document.getElementById('closeInterfaceBtn').addEventListener('click', function() {
    closeAddBookPage();
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

// pre-filled the form to add a book
function preFillForm(){
    const dateInput = document.getElementById('dateInput');
    dateInput.value = getTodayDate();
}

const starsContainer = document.getElementById('starsContainer');
const starsContainerDisplay = document.getElementById('starsContainerDisplay');

window.onload = ()=>{
    createStars()
    clearForm()
}