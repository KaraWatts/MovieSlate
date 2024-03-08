import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import movieSearch from "../Components/TMDB";
import MovieCard from "../Components/movieCards";
import { useOutletContext } from "react-router-dom";

function Search() {
  const { movieInfo, setMovieInfo } = useOutletContext();
  const [userInput, setUserInput] = useState("");
  const [cards, setCards] = useState();

  async function handleFormSubmit(event) {
    event.preventDefault();

    let response = await movieSearch(userInput);
    setMovieInfo(response);
  }

  useEffect(() => {
    setCards(
      movieInfo.map((film, index) => (
        <MovieCard
          key={index}
          title={film.title}
          description={film.overview}
          poster={film.poster_path}
          release={film.release_date}
          rating={film.vote_average}
        />
      ))
    );
  }, [movieInfo]);

  return (
    <>
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
