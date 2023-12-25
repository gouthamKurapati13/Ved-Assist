import "./Shop.css";
import Medicine from "../Predict/Medicine/Medicine";
import Navbar from "../Main/Navbar/Navbar";
import Logo from "./Logo.png";
import Avatar from "./avatar.jpg";
import axios from "axios";
import { useState } from "react";

function Shop() {
    const [searchText , setSearchText] = useState("");
    const [medicines, setMedicines] = useState([]);
    var handleSearch = async () =>{
        var Search = new FormData();
        Search.append("searchText", searchText);
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/shop/search",
            data: Search,
            headers: {
                'accept': 'application/json',
                'content-type':'multipart/form-data',
            },
        })
        .then(res=>
            {
                console.log("Search Successful");
                console.log(res.data);
            })
            .then(err =>{
            })
    }
    window.onload = async (event) => {
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/shop",
            data: [],
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data',
            },
           
        })
        .then(res=>{
            console.log("Successful");
            console.log(res.data.medicines);
            setMedicines(res.data.medicines);
        })
        .catch(err => {
            console.log("Error");
            console.log(err);
        })
    };
    return (
        <>             
            <div className="shop">
                <div className="shop-nav">
                    <div className="logo">
                        <a href="/"><img src={Logo} /></a>
                    </div>
                    <div className="search">
                        <input type="text" name = "searchText" value = {searchText} onChange = {(e)=>setSearchText(e.target.value)} placeholder="Search.." />
                        <button type="submit" onClick={handleSearch}><i class="fa fa-search"></i></button>
                    </div>
                    <div class="action">
                        <div class="profile">
                            <img src={Avatar} />
                        </div>
                        <div class="menu">
                            <h3>Username</h3>
                            <ul>
                            <li>
                                <img src="" /><a href="#"><i class="fa fa-history" aria-hidden="true"></i> Order History</a>
                            </li>
                            <li>
                                <img src="" /><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>   
                <div className="shop-container">
                    <h1 className="heading">Shop</h1>
                    <h2>One stop for all your Ayurvedic medicines</h2>
                    <p className="caution-mssg">Make sure to read the description before buying</p>
                    <div className="medicines-row">
                    {
                        medicines.map((med) => (
                                    <Medicine name={med.name} desc={med.description} price={med.price}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;