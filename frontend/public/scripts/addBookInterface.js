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
    // const titleInput = document.getElementById('titleInput');
    // const authorInput = document.getElementById('authorInput');
    // const dateInput = document.getElementById('dateInput');
    // const ratingInput = document.getElementById('ratingInput');
    // const commentsInput = document.getElementById('commentsInput');

    titleInput.value = "";
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

// create the stars
function createStars(){
    for (let i = 1; i <= 10; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★';
        star.dataset.value = i;
    
        star.addEventListener('click', () => {
            const selectedRating = star.dataset.value;
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);
        });
    
        starsContainer.appendChild(star);
    }
}

function highlightStars(rating) {
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach(star => {
        const starValue = Number(star.dataset.value);
        if (starValue <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

window.onload = ()=>{
    createStars()
    clearForm()
}