import { useState } from "react";
import Logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [menuIcon, setMenuIcon] = useState("fa fa-bars");
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        if (menuIcon==="fa fa-bars")
            setMenuIcon("fa fa-times");
        else
            setMenuIcon("fa fa-bars");
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="menu-bar" onClick={handleShowNavbar}>
                    <i className={menuIcon}></i>
                </div>
                <ul className={(showNavbar)?'nav-links active':'nav-links'}>
                    <li><a href="#" className="active-link">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <div className="mob-btn-grp">
                        <button>Predict</button>
                        <button>Shop</button>
                    </div>
                </ul>
                <div className="btn-grp">
                    <button>Predict</button>
                    <button>Shop</button>
                </div>

                
            </nav>
        </>
    );
}

export default Navbar;