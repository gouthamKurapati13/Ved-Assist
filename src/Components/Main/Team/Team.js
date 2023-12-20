import "./Team.css";
import Devimg from "./devlogo.png";
import gthb from "./git1.svg";
import lkdin from "./linkedin.svg";
import twtr from "./twitter.svg";

function Team() {
    return (
        <>
      
      


    <section id="theteam">

       
            
                <div>
                    <h1 id="team">The Team</h1>
                </div>
                



      <div className="row" id="teamrow">
        
        <div className="col-md text-center">
         
            <div id="devimg">
            <img src={Devimg} alt="" />
            </div>
            <div id="devdiv">
            <h3 id="devnames">Lorem</h3>
            <h4>mail id</h4>
            <img src={gthb} alt="" />
            <img src={lkdin} alt="" />
            <img src={twtr} alt="" />
          </div>
        </div>

        <div className="col-md text-center">
         
            <div id="devimg">
            <img src={Devimg} alt="" />
            </div>
            <div id="devdiv">
            <h3 id="devnames">Lorem</h3>
            <h4>mail id</h4>
            <img src={gthb} alt="" />
            <img src={lkdin} alt="" />
            <img src={twtr} alt="" />
          </div>
        </div>

        <div className="col-md text-center">
         
            <div id="devimg">
            <img src={Devimg} alt="" />
            </div>
            <div id="devdiv">
            <h3 id="devnames">Lorem</h3>
            <h4>mail id</h4>
            <img src={gthb} alt="" />
            <img src={lkdin} alt="" />
            <img src={twtr} alt="" />
          </div>
        </div>

        <div className="col-md text-center">
         
            <div id="devimg">
            <img src={Devimg} alt="" />
            </div>
            <div id="devdiv">
            <h3 id="devnames">Lorem</h3>
            <h4>mail id</h4>
            <img src={gthb} alt="" />
            <img src={lkdin} alt="" />
            <img src={twtr} alt="" />
          </div>
        </div>

      </div>
    </section>


        

        </>
    );

}

export default Team;