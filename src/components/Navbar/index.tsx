import homeIcon from '../../assets/icons/home-icon.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';
import { Nav, Navbar, Container } from "react-bootstrap";

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
                        <Nav.Link className="text-dark fw-bold" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" href="#profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
