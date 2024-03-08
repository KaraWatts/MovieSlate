import React from "react";
import { ListGroup, Card, Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import MovieCard from "../Components/movieCards";

function WatchList() {
  const { favorites, setFavorites } = useOutletContext();

  const favMovies = favorites.map((film) => (
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

  // <Card style={{ width: "18rem" }}>
  //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </Card.Text>
  //   </Card.Body>
  //   <ListGroup className="list-group-flush">
  //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
  //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  //   </ListGroup>
  //   <Card.Body>
  //     <Card.Link href="#">Card Link</Card.Link>
  //     <Card.Link href="#">Another Link</Card.Link>
  //   </Card.Body>
  // </Card>
}

export default WatchList;
