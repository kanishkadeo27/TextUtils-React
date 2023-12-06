import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked'+text)
        let newText = text.toUpperCase();
        // setText("you have clicked on handleUpClick")
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        // console.log('uppercase was clicked'+text)
        let newText = text.toLowerCase();
        // setText("you have clicked on handleUpClick")
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleSummClick = ()=>{
        let newText = text.slice(0,200);
        setText(newText);
        props.showAlert("Text Summary Generated","success");
    }
    const handleClearClick = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared text","success");
    }
    const handleLineClick = ()=>{
        let newText = text.trimEnd();
        setText(newText);
        props.showAlert("Text Trimmed","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
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
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">{props.heading}</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'rgb(45 ,107 ,198)' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSummClick}>summarize text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLineClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} time taken to read the text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here!!"}</p>
    </div>
    </>
  )
}
