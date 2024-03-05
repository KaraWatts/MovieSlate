import axios from 'axios';

function movieSearch(input) {

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {query: input, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUwNmFmNGQzYjY5MjZiNzI2ZmNiYTY3MTdlMDlkZCIsInN1YiI6IjY1ZTYyMDM1ZmUwNzdhMDE4NTEzZjZlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SHajmf1jQr-YvDmbpCuevylIAPZpok5pWzLUXt394Rk'
    }
  };
 
  return axios
    .request(options)
    .then(function (response) {
      let responseData = response.data
      return responseData.results
      
    })
    .catch(function (error) {
      console.error(error);
    });


}

export default movieSearch;