
import './App.css';
import "./components/Textform.css"
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import About from './components/About';
import {  BrowserRouter as Router,
  Routes,
  Route, } from 'react-router-dom';



function App() {
  const [ mode, setmode] =useState('light');
  const toggleMode=()=>{
  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor='black'
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white'
  }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode}/>
   <div className='cont '>
     
   </div>

       <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode}/>}>
          </Route>
        </Routes>
   </Router>
  
    </>
  );
}

export default App;
