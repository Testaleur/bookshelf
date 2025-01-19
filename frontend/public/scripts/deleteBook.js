document.getElementById('deleteBookBtn').addEventListener('click', sendConfirmation);

function sendConfirmation(){
    confirmationButton()
}

function confirmationButton(){
    buttonConfirm = document.getElementById('deleteBookBtn');
    bookName = buttonConfirm.parentElement.parentElement.children[0].textContent;

    buttonConfirm.textContent = "Are you sure ?"

    // switch class
    buttonConfirm.classList.remove('default');
    buttonConfirm.classList.add('confirmation');

    // switch event
    buttonConfirm.removeEventListener('click', sendConfirmation);
    buttonConfirm.addEventListener('click', deleteBookFromFile);
}

function deleteBookFromFile() {
    // the user clicked on delete and confirmed
    buttonConfirm = document.getElementById('deleteBookBtn');
    bookName = buttonConfirm.parentElement.parentElement.children[0].textContent;
    resetButtonDelete()

    const bookToDeleteData = {
        title : bookName
    };

    fetch('/deleteBook', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookToDeleteData)
    })

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })

    .then(dataReceived => {
        // console.log(dataReceived)
        closeBookPage()
        hideTheDeletedBook(dataReceived)
    })

    .catch(error => {
        console.error('Error making request:', error);
    });
    // close the interface
}

function resetButtonDelete(){
    buttonConfirm = document.getElementById('deleteBookBtn');
    buttonConfirm.textContent = "Delete"

    // switch back class 
    buttonConfirm.classList.remove('confirmation');
    buttonConfirm.classList.add('default');

    // switch back event
    buttonConfirm.removeEventListener('click', deleteBookFromFile);
    buttonConfirm.addEventListener('click', sendConfirmation);
}

function hideTheDeletedBook(dataReceived){
    console.log(dataReceived)
    titleToDelete = dataReceived.title ;
    console.log(titleToDelete)
    const bookToDelete = document.getElementById(titleToDelete);
    bookToDelete.remove()
}