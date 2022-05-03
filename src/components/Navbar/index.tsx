<<<<<<< Updated upstream
<<<<<<< Updated upstream
//import './styles.css';
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
=======
import Navbar from 'react-bootstrap/Navbar'
import homeIcon from '../../assets/icons/home-icon.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';

function NavbarTop() {
    return (
=======
import Navbar from 'react-bootstrap/Navbar'
import homeIcon from '../../assets/icons/home-icon.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';

function NavbarTop() {
    return (
>>>>>>> Stashed changes
        <Navbar className="mb-5" bg="primary" variant="dark">
                <Navbar.Brand href="#home" className="mx-3"><h2>Topzera</h2></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="#home">
                        <img
                            alt="Home"
                            src={homeIcon}
                            width="32"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
                        </Navbar.Brand>
                        <Navbar.Brand href="#profile">
                        <img
                            alt="Profile"
                            src={profileIcon}
                            width="32"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
                        </Navbar.Brand>
                </Navbar.Collapse>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </Navbar>
    );
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default TopNavbar;
=======
export default NavbarTop;
>>>>>>> Stashed changes
=======
export default NavbarTop;
>>>>>>> Stashed changes
