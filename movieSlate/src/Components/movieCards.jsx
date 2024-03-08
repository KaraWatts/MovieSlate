import { Card } from "react-bootstrap/";
import default_poster from "../assets/default_poster.jpeg";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function MovieCard({ id, release, poster, title, rating, description }) {
  const { favorites, setFavorites } = useOutletContext();

  const navigate = useNavigate();
  const onClick = () => {
    setFavorites([
      ...favorites,
      {
        key: id,
        id: id,
        title: title,
        description: description,
        poster: poster,
        release: release,
        rating: rating,
      },
    ]);
    navigate(`watchlist/`);
  };

  return (
    <Card
      onClick={onClick}
      className="m-2 overflow-hidden"
      style={{
        width: "12rem",
        height: "28rem",
        padding: "0",
        cursor: "pointer",
      }}
    >
      <Card.Img
        className="bg-black"
        style={{ paddingTop: "1px", paddingLeft: "17px", paddingRight: "17px" }}
        variant="top"
        src={poster}
      />
      <Card.Body>
        <Card.Title className="fs-5">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Rating: {parseInt(rating)}/10
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Released: {release}
        </Card.Subtitle>
        {/* <Card.Text className="text-start" style={{ height: "5rem" }}>
          {description}
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
