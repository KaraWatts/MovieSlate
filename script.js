document.querySelector('#addButton').addEventListener('click', addMovie);
const movieList = document.querySelector('#movieRanking');

function showRankings() {
    movieList.innerHTML = localStorage.getItem('data');
}
showRankings();

//Add an item to the movie list
function addMovie() {
    //create list item for new movies
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'listedMovie')
    // listItem.setAttribute('draggable', 'true')
    listItem.innerHTML = document.querySelector('#searchBar').value;    
    //add new list item to Movie List
    movieList.appendChild(listItem);
    saveData();
    showRankings();
}

let currentMovie = null
document.addEventListener('mousedown', (e) => {
    if (e.target.className === 'listedMovie'){
        console.log(e.target.closest('li'))
        currentMovie = e.target.closest('li')
    }
});

document.addEventListener('mouseup', (e) => {
    console.log(currentMovie)
    if (currentMovie){
        console.log(e.target.closest('li'))
        movieList.insertBefore(currentMovie, e.target.closest('li'))
    }
    saveData()
});



//Save the movie list to the local storage
function saveData() {
    localStorage.setItem("data", movieList.innerHTML);
    showRankings();
}






