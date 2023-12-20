import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
import About from "./About/About";

window.onscroll = () => {
    document.querySelectorAll('section').forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < (offset + height)) {
            document.querySelectorAll('.nav-links li a').forEach(links => {
                links.classList.remove('active-link');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active-link');
            });
        }
    });
};


function Main() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Team />
            <Footer />
        </>
    );
}

export default Main;