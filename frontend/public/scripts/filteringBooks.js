document.getElementById("filterButton").addEventListener('click', () => {
    openFilterInterface()
})

function openFilterInterface(){
    const filterPage = document.getElementById('filterPage');
    filterPage.style.display = 'flex';
    typeInputFilter.value = currentFilteringOptions.type;

    const overlay = document.getElementsByClassName('overlay');
    overlay[2].style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
}

function closeFilterInterface(){
    document.getElementsByClassName('overlay')[2].style.display = 'none';
    document.getElementById('filterPage').style.display = 'none';
}

function applyFilter(){
    // changes the saved filters
    currentFilteringOptions.type = typeInputFilter.value;

    // update the bookshelves
    updateBookshelves()

    closeFilterInterface();
}


function clearFilter(){
    typeInputFilter.selectedIndex = 0;
}

document.getElementById('closeFilterBtn').addEventListener('click', function() {
    closeFilterInterface();
});

document.getElementById('resetFilterBtn').addEventListener('click', function() {
    clearFilter();
});

document.getElementById('applyTheFilterBtn').addEventListener('click', function() {
    applyFilter();
});