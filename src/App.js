
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from "./components/About/About";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Web from './components/web/Web';
import Ecom from './components/ecom/Ecom';
import Dopetil from './components/dope/Dopetil';
import Cson from './components/contactus/Cson';




function App() {
  return (
  <>
<BrowserRouter>
  <Navbar/>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/digit'element={< Dopetil/>}/>
   <Route path='/web'element={<Web/>}/>
   <Route path='/ecom' element={<Ecom/>}/>
   <Route path='/contactus' element={<Cson/>}/>
   {/* <Route path="*" element={<NoPage />}/> */}
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
