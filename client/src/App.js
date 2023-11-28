import react, { Fragment } from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

// components 
import Menu from './components/Menu';
import LandingPage from './components/LandingPage';
import Navbar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <>
      <Navbar />        
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </>   
    </Router>
    );
}
   
export default App;
