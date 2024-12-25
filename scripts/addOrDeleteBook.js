document.getElementById('deleteBookBtn').addEventListener('click', function() {
    bookName = document.getElementById('deleteBookBtn').parentElement.parentElement.children[0].textContent;
    openConfirmationPage(bookName);
});

function openConfirmationPage(bookName){
    console.log("are you sure you want to delete : '" + bookName + "' ?")
    deleteBookFromFile(bookName);// misses if
}

function deleteBookFromFile(bookName) {

}