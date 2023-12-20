import "./Footer.css";
import fb from "./facebook.svg";
import ig from "./instagram.svg";
import lkdin from "./linkedIn.svg";
import twtr from "./twitter.svg";
import yt from "./youtube.svg";
import apple from "./apple.svg";
import android from "./android.svg";

function Footer() {
    return (
        <>
      
      


      <footer className="footer">
        <div className="wrapper">





            <div className="footer_middle">
                <div className="footer_middle_left">
                    <h5>Follow Us</h5>
                    <div className="footer_middle_left_list">
                        <div className="footer_icons">
                            <a href="https://www.facebook.com/"><img src={fb} alt="facebook" /></a>
                        </div>
                        <div className="footer_icons">
                            <a href="https://www.linkedin.com">
                                <img src={lkdin} alt={lkdin} /></a>
                        </div>
                        <div className="footer_icons">
                            <a href="https://twitter.com/?lang=en">
                                <img src={twtr} alt={twtr} /></a>
                        </div>
                        <div className="footer_icons">
                            <a href="https://www.youtube.com/">
                                <img src={yt} alt=""/></a>
                        </div>
                        <div className="footer_icons">
                            <a href="https://www.instagram.com/">
                                <img src={ig} alt={ig} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>© 2023 VedAssist®</p>
                <ul className="footer_bottom_list">
                    <li><a href="#team">About Us</a></li>
                    <li><a href="#team">Our Team</a></li>
                </ul>
            </div>
        </div>
    </footer>


        

        </>
    );

}

export default Footer;