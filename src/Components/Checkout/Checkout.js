import "./Predict.css"
import Navbar from "../Main/Navbar/Navbar";



function Checkout() {
    return (
        <>
        <Navbar/>
          <section id="checkout">
            

          <h1>Checkout</h1>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php">

              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="John Moore" required />
                  <label htmlFor="phone"><i className="fa fa-phone"></i> Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 99999 99999" required />
                  <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="address" placeholder="542, 15th Street" required />
                  <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="Chennai" required />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input type="text" id="state" name="state" placeholder="Tamil Nadu" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="600028" required />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                    <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                    <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John M" />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2025" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352" />
                    </div>
                  </div>
                </div>

              </div>

              <input type="submit" value="Continue to checkout" className="btn" />
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>Cart <span className="price" style={{ color: 'black' }}><i className="fa fa-shopping-cart"></i> <b>1</b></span></h4>
            <p><a href="#">Product 1</a> <span className="price">Rs. 99</span></p>
            <hr />
            <p>Total <span className="price" style={{ color: 'black' }}><b>Rs. 99</b></span></p>
          </div>
        </div>
      </div>


          </section>
        </>
    );

}

export default Home;