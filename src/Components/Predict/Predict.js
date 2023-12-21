// import "./Predict.css"

function Predict() {
    return (
        <>
        <section id="predicterheader">
            <h1>Predicter</h1>
            <h2><b>Get the best suggestions of Ayurvedic medicine</b></h2>
            <h3>To cure your symptoms, with no side-effects.</h3>

            <div id="maindiv">
            <h2>Provide your details here</h2>
            <form action="#">
                <div class="row align-items-center">
                    <input type="number" id="age" name="age" placeholder="Age" min="0" /><br />
                    
                    <form action="#">
                    
                        <select name="gender" id="gender">
                            <option value="" disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        
                        </select>
                    </form>

                    <input type="number" id="weight" name="weight" placeholder="Weight" min="0" />

                </div>
           </form>
            
        <div class="row">
          <h2>Provide your symptoms here</h2>
            </div>
            

                <div>
                    <div class="row" id="symptoms">
                    <label for="cold">Cold</label>
                    <input type="checkbox" id="cold" name="cold"  />
                
                    
                    <label for="fever">Fever</label>
                    <input type="checkbox" id="fever" name="fever" />
                

                    <label for="cough">Cough</label>
                    <input type="checkbox" id="cough" name="cough"  />
                
                </div>
                <div class="row" id="symptoms">
                    <label for="dizziness">Dizziness</label>
                    <input type="checkbox" id="dizziness" name="dizziness" />

                    
                    <label for="vomiting">Vomiting</label>
                    <input type="checkbox" id="vomiting" name="vomiting"  />
                
                    
                    <label for="diarrhoea">Diarrhoea</label>
                    <input type="checkbox" id="diarrhoea" name="diarrhoea" />
                </div>

                <div class="row" id="symptoms">
                    <label for="eyepain">Eyepain</label>
                    <input type="checkbox" id="eyepain" name="eyepain"  />
                
                    
                    <label for="headache">Headache</label>
                    <input type="checkbox" id="headache" name="headache" />

                    
                    <label for="stomachpain">Stomach pain</label>
                    <input type="checkbox" id="stomachpain" name="stomachpain"  />
                </div>


                    <div class="row" id="symptoms">
                    
                    <label for="chestpain">Chest pain</label>
                    <input type="checkbox" id="chestpain" name="chestpain" />
                    

                    <label for="jointpain">Joint pain</label>
                    <input type="checkbox" id="jointpain" name="jointpain"  />
                
                    
                    <label for="throatpain">Throat pain</label>
                    <input type="checkbox" id="throatpain" name="throatpain" />
                </div>


            </div>
        </div>



        </section>
        
    </>
    );
}

export default Predict;