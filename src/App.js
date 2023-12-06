import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, 
  // Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');//state variable which shows whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);//alert ek object h , set alert ek function hai jo alert messgae ko set krega
  
  const toggleMode = ()=>{
    if(mode === 'light')
    {
        setMode('dark');
      document.body.style.backgroundColor = '#043070';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils-Dark Mode";
      /*setInterval(()=>{
        document.title = "TextUtils is Amazing";
      },2000);
      setInterval(()=>{
        document.title = " Install TextUtils now";
      },1500);*/
    }
    else
    { 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils-Light Mode";
    }
  }

  const showAlert = (message,type)=>{ //it is a function to show alert msg on our screen
    setAlert({
      msg:message,
      type:type
    })//pehle alert null tha ab alert ek object hai
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  return (
    <>
    <Router>
      {/* <Navbar title = "TextUtils" aboutText ="About- TextUtils"/> */}
      {/* <Navbar/> */}
        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
            {/* agar exact use nhi kia toh dono likhne pr component 1 hi render ho jaega 
            islyee exact likhna zruri h
            /users --> Component 1
            /users/home --> omponent 2 */}
            <Route exact path="/about" element={<About mode = {mode}/>}/> 
            <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode = {mode} toggleMode = {toggleMode}/> }/>  
            {/* <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode = {mode} toggleMode = {toggleMode}/>  */}
        </Routes>
        </div>  
    </Router>

  
    </>
  );
}

export default App;
