import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./Components/Main/Main";
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Predict from './Components/Predict/Predict';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Main />} />
          <Route path="/signin" element={ <Signin />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/predict" element={ <Predict />} />
          {/* <Route path="/predict" element={ <Main />} /> */}
          {/* <Route path="/shop" element={ <Shop />} /> */}
          {/* <Route path="/shop" element={ <Shop />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
