import Logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav>
                <div className="logo">
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#" className="active-link">Home</a></li>
                    <li><a href="#">About</a></li>
                    {/* <li><a href="#">Testinomials</a></li> */}
                    <li><a href="#">Team</a></li>
                </ul>
                <div className="brn-grp">
                    <button>Predict</button>
                    <button>Shop</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;