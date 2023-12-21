import "./Card.css"

function Card({Devimg}) {
    return (
        <>
            <div className="card">                
                <div id="dev-img">
                    <img src={Devimg} alt="" />
                </div>
                <div id="dev-div">
                    <h3>Lorem</h3>
                    <h4>Developer</h4>
                    <div className="socials">
                        <ul>
                            <li><a href=""><i className="fa fa-github"></i></a></li>
                            <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                            <li><a href=""><i className="fa fa-envelope-o"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;