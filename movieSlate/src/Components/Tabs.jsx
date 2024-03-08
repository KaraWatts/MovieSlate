import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navStyle.css";
import WatchList from "../pages/WatchList";

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
          Watch List
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default NavTabs;
