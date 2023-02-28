import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booked from './components/Booked/Booked';
import Calendar from './components/Calendar/Calendar';
function App() {


  return (
  <Router>
    <Routes>  
      
      <Route path="/" element={<Calendar/>}/>
      
      <Route path="/Booked" element={<Booked/>}/>
    </Routes>
  </Router>
  )
}

export default App;
