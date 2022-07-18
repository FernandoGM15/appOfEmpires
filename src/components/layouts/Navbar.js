import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="col-2">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="" style={{ width: "50px" }} />
                    </Link>
                </div>
                <div className="col-10 d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/civilizations">Civilizations</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;