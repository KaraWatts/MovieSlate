import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navStyle.css";

function NavTabs() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/watchlist" eventKey="watchlist">
          To Be Watched
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/rankings" eventKey="rankings">
          Moving Rankings
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default NavTabs;
