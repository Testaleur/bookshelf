// open interface
document.getElementById("addBookOpenInterface").addEventListener('click', () => {
    openAddBookInterface()
})

function openAddBookInterface(){
    const newBookPage = document.getElementById('newBookPage');
    newBookPage.style.display = 'flex';

    const overlay = document.getElementsByClassName('overlay');
    overlay[1].style.display = 'flex'; 
    document.body.style.overflow = 'hidden';

    createStars()
}

function closeAddBookPage(){
    document.getElementsByClassName('overlay')[1].style.display = 'none';
    document.getElementById('newBookPage').style.display = 'none';
    highlightStars(0)
}

document.getElementById('closeInterfaceBtn').addEventListener('click', function() {
    closeAddBookPage();
});

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

// pre-filled the form to add a book
const dateInput = document.getElementById('dateInput');
dateInput.value = getTodayDate();

const starsContainer = document.getElementById('starsContainer');
const ratingInput = document.getElementById('ratingInput');

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
            console.log("selected")
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}