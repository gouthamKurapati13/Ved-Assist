import "./Predict.css"
import Navbar from "../Main/Navbar/Navbar";
import Medicine from "./Medicine/Medicine";

function Predict() {
    return (
        <>
            <Navbar />
            <div className="predict">
            <div className="container" id="container">
                <div className="form-container log-in-container">
                    <form action="#">
                        <h1 className="heading">Predictor</h1>
                        <span>Get best Ayurvedic predictions without any side effects</span>
                        <div className="input-group">
                            <input type="number" placeholder="Age" required/>
                            <select id="gender" name="gender" form="" defaultValue="">
                                <option value="" disabled>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <input type="number" placeholder="Weight" step="0.01" min="0" max="10" />
                        </div>
                        <div className="check-list-container">
                            <p>Selct your Symptoms</p>
                            <div className="check-list">
                                <div className="checkbox-wrapper-1">
                                    <input id="Cold" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Cold">Cold</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Cough" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Cough">Cough</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Fever" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Fever">Fever</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Dizziness" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Dizziness">Dizziness</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Vomiting" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Vomiting">Vomiting</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Diarrhoea" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Diarrhoea">Diarrhoea</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Eyepain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Eyepain">Eyepain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="Headache" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="Headache">Headache</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="StomachPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="StomachPain">Stomach Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="ChestPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="ChestPain">Chest Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="JointPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="JointPain">Joint Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="ThroatPain" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="ThroatPain">Throat Pain</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Predict Now</button>
                        <div className="medicines-row">
                            <Medicine />
                            <Medicine />
                            <Medicine />
                        </div>
                    </form>

                </div>

	        </div>
            </div>

        </>
    );
}

export default Predict;