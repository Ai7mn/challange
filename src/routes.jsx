import React from 'react';
import Home  from './pages/Home';
import Featurs  from './pages/Featurs';
import FAQ  from './pages/FAQ';
import Pricing  from './pages/Pricing';
import Testminials  from './pages/Testminials';
import NavBar from "./components/navbar";
import { BrowserRouter as Router ,Route} from 'react-router-dom';

export const Routes = () => {
  return (
  
      
      <Router>
           
      <NavBar />
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route  path="/Featurs" element={<Featurs/>} />
        <Route  path="/FAQ" element={<FAQ/>} />
        <Route  path="/Pricing" element={<Pricing/>} />
        <Route  path="/Testminials" element={<Testminials/>} />
      </Routes >

    </Router>
   
  );
};
