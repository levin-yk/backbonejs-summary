import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Translate from './pages/Translate';
import { ROUTES } from './Constants';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home/>} />
          <Route exact path={ROUTES.TRANSRATE} element={<Translate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
