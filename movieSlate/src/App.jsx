import { useEffect, useState } from "react";
import "./App.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import movieSearch from "./Components/TMDB";
import movieCard from "./Components/movieCards";

function App() {
  const [userInput, setUserInput] = useState("");
  const [movieInfo, setMovieInfo] = useState([]); 
  const [cards, setCards] = useState();

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(userInput);

    let response = await movieSearch(userInput);
    console.log(response);
    setMovieInfo(response);
  }
  useEffect(() => {
    setCards(
      movieInfo.map((film) =>
        movieCard(
          film.title,
          film.overview,
          film.poster_path,
          film.release_date,
          film.vote_average
        )
      )
    );
  }, [movieInfo]);
  console.log(movieInfo);

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
        <Row xl={4} lg={3} md={2} sm={2} xs={1} className="g-4">
          {cards}
        </Row>
      </Container>
    </>
  );
}

export default App;
