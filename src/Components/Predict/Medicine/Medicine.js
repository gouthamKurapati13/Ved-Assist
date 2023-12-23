import "./Medicine.css";
import med from "./med-1.png";

function Medicine() {
    return (
        <>
            <div class="med-container">
                <div class="wrapper">
                <div class="banner-image"> 
                    <img src={med} />
                </div>
                <h1> Medicine name </h1>
                <p>Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit.</p>
                </div>
                <div class="button-wrapper"> 
                {/* <button class="btn outline">DETAILS</button> */}
                    <button class="btn fill">Rs. 179/-<br />BUY NOW</button>
                </div>
            </div>
        </>
    );
}

export default Medicine;