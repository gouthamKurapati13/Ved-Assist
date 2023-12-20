import "./Team.css";
import Devimg from "./devlogo.png";
import Card from "./Card";

function Team() {
    return (
        <>
      
      


    <section id="team">
      <h1>Our Team</h1>
      <div className="team-row">
        <Card Devimg={Devimg} />
        <Card Devimg={Devimg} />
        <Card Devimg={Devimg} />
        <Card Devimg={Devimg} />
      </div>
    </section>


        

        </>
    );

}

export default Team;