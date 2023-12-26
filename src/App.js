import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./Components/Main/Main";
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Predict from './Components/Predict/Predict';
import Shop from './Components/Shop/Shop';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Main />} />
          <Route path="/signin" element={ (localStorage.getItem('vedtoken')) ? <Shop/> : <Signin/> } />
          <Route path="/signup" element={ (localStorage.getItem('vedtoken')) ? <Shop/> : <Signup/> } />
          <Route path="/predict" element={ <Predict />} />
          <Route path="/shop" element={ (localStorage.getItem('vedtoken')) ? <Shop/>:<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
