import "./Medicine.css";
import med from "./med-1.png";
import Checkout from "../../Checkout/Checkout";
import { useState } from "react";

function Medicine({data, togglePopup}) {
    return (
        <>
            <div class="med-container">
                <div class="wrapper">
                <div class="banner-image"> 
                    <img src={med} />
                </div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                </div>
                <div class="button-wrapper">
                    <button  class="btn fill" onClick={(e)=>{e.preventDefault(); togglePopup(data);}}>Rs. {data.price}/-<br />BUY NOW</button>
                </div>
            </div>
        </>
    );
}

export default Medicine;