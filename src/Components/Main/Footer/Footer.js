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
      
      


      <footer class="footer">
        <div class="wrapper">





            <div class="footer_middle">
                <div class="footer_middle_left">
                    <h5>Follow Us</h5>
                    <div class="footer_middle_left_list">
                        <div class="footer_icons">
                            <a href="https://www.facebook.com/"><img src={fb} alt="facebook" /></a>
                        </div>
                        <div class="footer_icons">
                            <a href="https://www.linkedin.com">
                                <img src={lkdin} alt={lkdin} /></a>
                        </div>
                        <div class="footer_icons">
                            <a href="https://twitter.com/?lang=en">
                                <img src={twtr} alt={twtr} /></a>
                        </div>
                        <div class="footer_icons">
                            <a href="https://www.youtube.com/">
                                <img src={yt} alt=""/></a>
                        </div>
                        <div class="footer_icons">
                            <a href="https://www.instagram.com/">
                                <img src={ig} alt={ig} /></a>
                        </div>
                    </div>
                </div>
                <div class="footer_middle_right">
                    <h5>Mobile app</h5>
                    <div class="footer_middle_right_list">
                        <div class="footer_icons">
                            <img src={apple} alt="apple" />
                        </div>
                        <div class="footer_icons">
                            <img src={android} alt="android" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <p>© 2023 VedAssist®</p>
                <ul class="footer_bottom_list">
                    <li>About Us</li>
                    <li><a href="../profile card/profile card/deena.html">Contact Us</a></li>

                </ul>
            </div>
        </div>
    </footer>


        

        </>
    );

}

export default Footer;