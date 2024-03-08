import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function SearchBar() {
  const [movieInfo, setMovieInfo] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(movieInfo);
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="movieSearchBar">
        <Form.Label className="tw-text-blue-500">
          Search Movie by Title
        </Form.Label>
        <Form.Control
          type="Normal text"
          placeholder="Movie Title"
          value={movieInfo}
          onChange={(event) => setMovieInfo(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
