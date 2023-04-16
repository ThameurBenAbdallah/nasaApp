
import './App.css';
import MarsRoverImages from './components/Card';
import ApodImages from './components/Apod';
import About from './components/About';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
     
      <Routes>
         <Route path="/" element={<ApodImages/>} />
         <Route path="/Mars" element={<MarsRoverImages itemsPerPage={20}/>} />
         <Route path="/About" element={<About />} />
       </Routes>

    </div></>
  );
}

export default App;
