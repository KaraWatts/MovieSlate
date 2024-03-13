import React from "react";
import { ListGroup, Card, Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import MovieCard from "../Components/movieCards";

function Rankings() {
  const { rankings, setRankings } = useOutletContext();

  const favMovies = rankings.map((film) => (
    <MovieCard
      key={film.key}
      id={film.id}
      title={film.title}
      description={film.description}
      poster={film.poster}
      release={film.release}
      rating={film.rating}
    />
  ));

  return (
    <Container fluid>
      <Row className="justify-content-md-center">{favMovies}</Row>
    </Container>
  );
}

export default Rankings;
