document.getElementById('deleteBookBtn').addEventListener('click', function() {
    bookName = document.getElementById('deleteBookBtn').parentElement.parentElement.children[0].textContent;
    confirmationButton(bookName);
});

function openConfirmationPage(bookName){
    console.log("are you sure you want to delete : '" + bookName + "' ?")
    buttonConfirm = document.getElementById('deleteBookBtn');
    buttonConfirm.textContent = "Sure ?"
    deleteBookFromFile(bookName);
}

function deleteBookFromFile(bookName) {

}