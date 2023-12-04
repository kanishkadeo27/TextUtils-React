import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked'+text)
        let newText = text.toUpperCase();
        // setText("you have clicked on handleUpClick")
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log('uppercase was clicked'+text)
        let newText = text.toLowerCase();
        // setText("you have clicked on handleUpClick")
        setText(newText)
    }
    const handleSummClick = ()=>{
        let newText = text.slice(0,200);
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = " ";
        setText(newText)
    }
    const handleLineClick = ()=>{
        let newText = text.trimEnd();
        setText(newText)
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleOnChange = (event)=>{
        // console.log('on change')
        setText(event.target.value)
    }

    /* text - state variable wo value hai jo useState me rakhi h and setText is the function using which we can update the value of text*/
    const[text,setText] = useState('');
    // text = "new text";//wrong way to change the state
    // setText("new text");//correct way to change the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">{props.heading}</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleSummClick}>summarize text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} time taken to read the text</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
