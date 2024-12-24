function openPage(message) {
    const bookPage = document.getElementById('bookPage');
    const bookTitle = document.getElementById('bookTitle');
    bookTitle.textContent = message;
    bookPage.style.display = 'flex'; // box

    const overlay = document.getElementsByClassName('overlay'); // no clicking on the shelves while its open
    overlay[0].style.display = 'flex'; // box
    document.body.style.overflow = 'hidden'; // no scrolling
}

document.getElementById('bookCloseBtn').addEventListener('click', function() {
    closeBookPage();
});

function closeBookPage(){
    document.getElementsByClassName('overlay')[0].style.display = 'none';
    document.getElementById('bookPage').style.display = 'none';
}

// 