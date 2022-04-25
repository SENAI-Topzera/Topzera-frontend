import './styles.css';

function Navbar() {
    return (
        <nav className={"container nav-container"}>
            <div className={"nav-content"}>
                <div className={"nav-icons"}>
                    <i className={"las la-home icon"} />
                </div>
                <div className={"nav-links"}>
                    <span className={"h3"}>Ofertas</span>
                    <span className={"h3"}>Registrar-me</span>
                    <span className={"h3"}>Login</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
