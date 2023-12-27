import "./Orders.css";
import medImg from "../Predict/Medicine/med-1.png";

function OrderCard({name, id, date, price}) {
    return (
        <>
            <div className="order-card">
                <div className="banner-img">
                    <img src={medImg} />
                </div>
                <h3>{name}</h3>
                <table>
                    <tr>
                        <td><b>Order ID</b></td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td><b>Order Date</b></td>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <td><b>Price</b></td>
                        <td>{price}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default OrderCard;