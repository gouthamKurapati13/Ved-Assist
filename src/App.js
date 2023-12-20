import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Main />} />
          {/* <Route path="/shop" element={ <Shop />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
