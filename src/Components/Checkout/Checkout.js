import { useState } from "react";
import "./Checkout.css";

function Checkout({togglePopup, data}) {
    return (
        <>
          <div className="popup-box">
            <form>
              <h1>Checkout</h1>
              <div className="checkout-items">
                <div className="inputs">
                    <h2>Delivery Address</h2>
                    <input type="text" placeholder="Door No./Building No." />
                    <input type="text" placeholder="Street Name" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Pincode" />
                  </div>
                <div className="summary">
                  <h2>Order Summary</h2>
                  <div className="details">
                    <table>
                      <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>Rs. {data.price}/-</td>
                      </tr>
                    </table>
                    <hr />
                    <b>Total Price : Rs. {data.price}/-</b>
                  </div><br/>
                  <button onClick={(e)=>{e.preventDefault();}}>Confirm Order</button> <br /> <br />
                  <a onClick={togglePopup}>Cancel Order</a>
                </div>
              </div>
            </form>
          </div>
        </>
    );
}

export default Checkout;