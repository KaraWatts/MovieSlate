import { Card, Col, Button, Offcanvas, Image } from "react-bootstrap/";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function MovieCard({
  id,
  release,
  poster,
  title,
  rating,
  description,
  banner,
}) {
  const { rankings, setRankings } = useOutletContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const addToRankings = () => {
    setRankings([
      ...rankings,
      {
        key: id,
        id: id,
        title: title,
        description: description,
        poster: poster,
        release: release,
        rating: rating,
        banner: banner,
      },
    ]);
    navigate(`rankings/`);
  };

  const addToWatchList = () => {
    setRankings([
      ...rankings,
      {
        key: id,
        id: id,
        title: title,
        description: description,
        poster: poster,
        release: release,
        rating: rating,
        banner: banner,
      },
    ]);
    navigate(`watchlist/`);
  };

  return (
    <Col sm={5} md={3} lg={3} xl={2}>
      <Card
        onClick={handleShow}
        className="m-2 overflow-hidden"
        style={{
          minWidth: "9rem",
          minHeight: "21rem",
          maxWidth: "12rem",
          maxHeight: "21rem",
          padding: "0",
          cursor: "pointer",
          flexGrow: 1,
        }}
      >
        <Card.Img
          className="bg-black"
          style={{
            paddingTop: "1px",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
          variant="top"
          src={poster}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "12pt" }}>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Rating: {parseInt(rating)}/10
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{release}</Card.Subtitle>
        </Card.Body>
      </Card>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="details-body">
          <Image src={poster} fluid />
          <div>
            <p className="Rating_Release">
              Rating: {parseInt(rating)}/10 Release Year: {release}
            </p>
            <p>{description}</p>
          </div>
          <div className="buttons">
            <Button onClick={addToWatchList}>Want to Watch</Button>
            <Button onClick={addToRankings}>Watched</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Col>
  );
}

export default MovieCard;
