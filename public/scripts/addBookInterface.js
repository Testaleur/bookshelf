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
}

function closeAddBookPage(){
    document.getElementsByClassName('overlay')[1].style.display = 'none';
    document.getElementById('newBookPage').style.display = 'none';
}

document.getElementById('closeInterfaceBtn').addEventListener('click', function() {
    closeAddBookPage();
});
