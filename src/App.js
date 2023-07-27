import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/textform';
import Accrod from './Components/about';
import Alert from './Components/alert';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route, Link } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light');
  const[alert, SetAlert] = useState(null)
  const showAlertMessage=(msg, alertType)=>
  {
     SetAlert   ({
      alertType : alertType,
      message : msg,
     })
      setTimeout(()=>
      {
        SetAlert(null)
      },1500)
     
  }
  const handleMode=()=>
  {
    if( mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlertMessage(': Light Mode has been Enabled', 'success');
    }
    else 
    {
      setMode('dark');
      document.body.style.backgroundColor = '#010c46';
      showAlertMessage(': Dark Mode has been Enabled', 'success');
    }
  }
  return (
  <>
  {/* <Router> */}
    <Navbar title ="Text Utils" mode = {mode} handleMode = {handleMode}/>
    <Alert alert= {alert}/>
    {/* <Routes> */}
    {/* <Route path='/about' element = {<Accrod/>}/> */}
    {/* <Route path='/' element =/> */}
     {<TextForm title1 = "Enter Text for Analyze" mode={mode} alertmsg = {showAlertMessage}/>}
    {/* </Routes> */}
   {/* </Router> */}
  </>
  );
}

export default App;
