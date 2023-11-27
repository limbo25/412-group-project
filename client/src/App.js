import react, { Fragment } from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

// components 
import Input from './components/Input';
import LandingPage from './components/LandingPage';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <>
      <Navbar />
        <div className='container'> 

          <Routes>
            <Route path='/' element={<LandingPage />}>
            </Route>
            <Route path='/menu' element={<Input />}>
            </Route>
          </Routes>
        </div>
      </>   
    </Router>
    );
}
   
export default App;
