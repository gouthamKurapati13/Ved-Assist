import "./Home.css";
function Home() {
    function handlleClick(e) {
      e.preventDefault();
      window.location.replace('/signup');
    }
    return (
        <>
          <section id="home">
            <h1>VedAssist</h1>
            <h2><b>Unlock the power of Ayurveda</b></h2>
            <h3>Predict your perfect remedy, revolutionize your well-being</h3>
            <button id="button3" onClick={handlleClick}>Get Started</button>
          </section>
        </>
    );

}

export default Home;