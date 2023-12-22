import "./Predict.css"

function Predict() {
    return (
        <>
            <div className="predict">
            <div className="container" id="container">
                <div className="form-container log-in-container">
                    <form action="#">
                        <h1>Predictor</h1>
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
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Cold</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Cough</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Fever</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Dizziness</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Vomiting</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Diarrhoea</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Eyepain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Headache</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Stomach Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Chest Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Joint Pain</label>
                                </div>
                                <div className="checkbox-wrapper-1">
                                    <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                                    <label htmlFor="example-1">Throat Pain</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Sign Up</button>
                        <span>Already have an account? <a href="/signin">Sign in now</a></span>
                    </form>
                </div>

	        </div>
            </div>

        </>
    );
}

export default Predict;