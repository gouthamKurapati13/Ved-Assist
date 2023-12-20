import { useState } from "react";
import Logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        const handleShowNavbar = () => {
            setShowNavbar(!showNavbar);
        };
    }

    return (
        <>
            <nav>
                <div class="logo">
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="#" class="active-link">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                </ul>
                <div class="btn-grp">
                    <button>Predict</button>
                    <button>Shop</button>
                </div>

                <div className="menu-bar" onClick={handleShowNavbar}>
                    <i></i>
                </div>
            </nav>
        </>
    );
}

export default Navbar;