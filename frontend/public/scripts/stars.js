// create the stars
function createStars(){
    // add book
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
    // displayer
    for (let i = 1; i <= 10; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★';
        star.dataset.value = i;
        starsContainerDisplay.appendChild(star);
    }
}

// fill the stars according to the rating
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

function highlightStarsDisplayed(rating) {
    const stars = starsContainerDisplay.querySelectorAll('.star');
    stars.forEach(star => {
        const starValue = Number(star.dataset.value);
        if (starValue <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}