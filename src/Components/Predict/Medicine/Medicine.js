import "./Medicine.css";
import med from "./med-1.png";

function Medicine({name, desc, price}) {
    return (
        <>
            <div class="med-container">
                <div class="wrapper">
                <div class="banner-image"> 
                    <img src={med} />
                </div>
                <h1> {name} </h1>
                <p>{desc}</p>
                </div>
                <div class="button-wrapper"> 
                    <button class="btn fill">Rs. {price}/-<br />BUY NOW</button>
                </div>
            </div>
        </>
    );
}

export default Medicine;