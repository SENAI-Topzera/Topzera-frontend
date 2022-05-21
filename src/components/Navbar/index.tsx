import { ReactComponent as HouseIcon } from './../../assets/icons/house-door-fill.svg';
import { ReactComponent as PersonIcon } from './../../assets/icons/person-fill.svg';
import TZIcon from './../../assets/icons/tz/tz-32x32.png';
import { Nav, Navbar, Container } from "react-bootstrap";
import './styles.scss';

function TopNavbar() {
    return (
        <Navbar id='navbar-size' bg="primary">
            <Container fluid className="mx-3">
                <Navbar.Brand href="#home" className="text-dark">
                    <img src={TZIcon} alt="Topzera" title="Topzera" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-dark fw-bold" href="#home">
                            <HouseIcon />
                        </Nav.Link>
                        <Nav.Link className="text-dark fw-bold" href="/my-account">
                            <PersonIcon />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;