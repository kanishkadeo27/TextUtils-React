import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle , setMyStyle] = useState(
    //     {
    //         color:'black',
    //         backgroundColor: 'white'
    //     }
    // )
    // const [btntext,setBtnText] = useState("Enable dark mode")
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle(
    //             {
    //                 color:'black',
    //                 backgroundColor: 'white',
    //                 border: '1px solid white'
    //             }
    //         )
    //         setBtnText("Enable dark mode");
    //     }
    //     else{
    //         setMyStyle(
    //             {
    //                 color:'white',
    //                 backgroundColor: '#043070'
    //             }
    //         )
    //         setBtnText("Enable light mode");
    //     }
    // }
    let myStyle = {
        //js object
        color:props.mode ==='dark'?'white':'rgb(28,101,164)',
        backgroundColor: props.mode ==='dark'?'rgb(28,101,164)':'white',
        border:'2px solid',
        borderColor:props.mode ==='dark'?'white':'rgb(28,101,164)'
    }
  return (
    <div className='container'>
        <h1 className='my-3' style = {{color:props.mode ==='dark'?'white':'rgb(28,101,164)'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>Welcome to TextUtils</strong>, your go-to text manipulation companion designed to revolutionize the way you interact with and modify text.
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or Preview of your text.At TextUtils, we recognize the pivotal role text plays in our digital lives, and our mission is to empower users with a comprehensive and user-friendly toolset for handling text in diverse and creative ways. Tailor your text manipulation experience with precision. TextUtils provides customizable options, granting you unparalleled control over how you shape and mold your text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>Our mission is clear:</strong>  to simplify and amplify your text manipulation experience. We envision a world where manipulating text is not a daunting task but an empowering and creative endeavor. it is a free character and word counter tools which provides isntant character count & word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/character limit. TextUtils is our answer to the need for a versatile, efficient, and accessible text manipulation utility. Time is precious, and TextUtils values yours. Say goodbye to manual and time-consuming text edits; TextUtils streamlines the process, allowing you to achieve more in less time.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>User-Friendly Interface: </strong> This word counter works in any web browser such as chrome , firefox , internet explorer , safari , opera. it suits to count characters in facebook blogs , books, excel document, pdf document , essays etc...Navigating TextUtils is as intuitive as the art of crafting words. Our user-friendly interface ensures that whether you're a seasoned professional or a novice, you can harness the power of text manipulation effortlessly.Our commitment to innovation ensures that TextUtils stays ahead of the curve. We continuously update and enhance our utility, incorporating the latest advancements in text manipulation technology.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}