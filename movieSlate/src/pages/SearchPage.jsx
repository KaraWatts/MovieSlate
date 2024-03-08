import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import movieSearch from "../Components/TMDB";
import MovieCard from "../Components/movieCards";
import ComingSoon from "../Components/ComingSoon";
import default_poster from "../assets/default_poster.jpeg";

function Search() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [cards, setCards] = useState();

  async function handleFormSubmit(event) {
    event.preventDefault();

    let response = await movieSearch(userInput);
    setMovieInfo(response);
    console.log(response);
  }

  useEffect(() => {
    setCards(
      movieInfo.map((film) => {
        const year = film.release_date.slice(0, 4);
        const posterImg = film.poster_path
          ? `http://image.tmdb.org/t/p/w185${film.poster_path}`
          : default_poster;
        return (
          <MovieCard
            key={film.id}
            id={film.id}
            title={film.title}
            description={film.overview}
            poster={posterImg}
            release={year}
            rating={film.vote_average}
          />
        );
      })
    );
  }, [movieInfo]);

  return (
    <>
      <ComingSoon />
      <br />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="movieSearchBar">
          <Form.Label className="tw-text-blue-500">
            Search Movie by Title
          </Form.Label>
          <Form.Control
            type="Normal text"
            placeholder="Movie Title"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <Container fluid>
        <Row className="justify-content-md-center">{cards}</Row>
      </Container>
    </>
  );
}

export default Search;
