import "./Signin.css"
import Logo from "./Logo.png";
import lkdin from "./linkedIn.svg";
import twtr from "./twitter.svg";
import yt from "./youtube.svg";

function Signin() {
    return (
        <>
            <div class="container" id="container">
                <div class="form-container log-in-container">
                    <form action="#">
                        <div className="nav">
                            <div className="logo">
                                <a href="/"><img src={Logo} /></a>
                            </div>
                            <div className="footer_middle_left_list">
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
                            </div>
                        </div>
                        <h1 class="main-heading">Sign In</h1>
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                        <a href="#" class="forgot">Forgot your password?</a>
                        <button type="submit">Sign In</button>
                        <span>Don't have an account? <a href="/signup">Create now</a></span>
                    </form>
                </div>
	        </div>
        </>
    );
}

export default Signin;