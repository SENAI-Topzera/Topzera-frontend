import { ReactComponent as HouseIcon } from './../../assets/icons/house-door-fill.svg';
import { ReactComponent as PersonIcon } from './../../assets/icons/person-fill.svg';
import homeIcon from '../../assets/icons/home-icon.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';
//import './styles.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import './styles.css';

function TopNavbar() {
    return (
        <Navbar bg="primary">
            <Container fluid className="mx-3">
                <Navbar.Brand href="#home" className="text-dark">
                    <h1>Topzera</h1>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-dark fw-bold" href="#home">
                            <HouseIcon />
                        </Nav.Link>
                        <Nav.Link className="text-dark fw-bold" href="#home">
                            <PersonIcon />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;