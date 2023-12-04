import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import  {News}  from './components/News';

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText ="About- TextUtils"/> */}
      {/* <Navbar/> */}
        <Navbar title = "TextUtils"/>
        <div className='container my-3'>
          <About/>
          <TextForm heading="Enter the text to analyze below"/>
        </div> 
          {/* <News/> */}
    </>
  );
}

export default App;
