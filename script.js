document.querySelector('#searchButton').addEventListener('click', addMovie);
const movieList = document.querySelector('#movieRanking');


//Add an item to the movie list


/**
 * Description placeholder
 * @date 1/31/2024 - 11:03:04 AM
 */
function addMovie() {
    //create list item for new movies
    let listItem = document.createElement('li');
    listItem.setAttribute('draggable', 'true');
    listItem.setAttribute('class', 'listedMovie')
    listItem.innerHTML = document.querySelector('#searchBar').value;
    //create item for drag markers
    let dragHamburger = document.createElement('i')
    dragHamburger.setAttribute('class', 'draggableMarker')
    listItem.appendChild(dragHamburger)
    
    
    //add new list item to Movie List
    movieList.appendChild(listItem);
    saveData();
    
}




document.querySelector('#movieRanking').addEventListener('dragstart')
// Add dragging class to listed movie on dragstart event
listItem.addEventListener('dragstart', () => {
    listItem.classList.add("dragging");
});
// Remove dragging class from item on dragend event
listItem.addEventListener("dragend", () => listItem.classList.remove("dragging"));



function draggableMovieList(e) {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    // Getting all items except currently dragging and making array of them
    let siblings = [...movieList.querySelectorAll(".listedMovie:not(.dragging)")];
    
    // Finding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // Inserting the dragging item before the found sibling
    movieList.insertBefore(draggingItem, nextSibling);
    saveData();
}

movieList.addEventListener("dragover", draggableMovieList);
movieList.addEventListener("dragenter", e => e.preventDefault());


//Save the movie list to the local storage
function saveData() {
    localStorage.setItem("data", movieList.innerHTML);
}




/**
 * Description
 * @returns {any}
 */
function showRankings() {
    movieList.innerHTML = localStorage.getItem('data');
}

showRankings();