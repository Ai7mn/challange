// eslint-disable-next-line no-unused-vars
// import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import Home  from './pages/Home';
import Featurs  from './pages/Featurs';
import FAQ  from './pages/FAQ';
import Pricing  from './pages/Pricing';
import Testminials  from './pages/Testminials';
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes ,Route ,Navigate  } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
const App = () =>{
  return (
   
      <Router>
         <div className="App">
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Featurs" element={<Featurs/>} />
        <Route exact path="/FAQ" element={<FAQ/>} />
        <Route exact path="/Pricing" element={<Pricing/>} />
        <Route exact path="/Testminials" element={<Testminials/>} />
      </Routes >
      </div>
    </Router>
    
  );
}

export default App;