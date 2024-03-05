import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function movieCard(title, description, poster, release, rating) {
  return (
    <Col>
      <Card className="mt-3 overflow-hidden" style={{ width: '18rem', height: '45rem'}}>
      {console.log(poster)}
      <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185${poster}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rating: {parseInt(rating)}/10</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Released: {release}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
  );
}

export default movieCard;
