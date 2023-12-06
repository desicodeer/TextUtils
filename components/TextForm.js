import React, { useState } from 'react'

function TextForm(props) {
    const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    let lowText = text.toLowerCase();
    setText(lowText);
  }
  const handleCapitalizeClick = ()=>{
    let arr = text.split(" ");
    for(let i=0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newCap = arr.join(" ");
    setText(newCap);
  }
  const handleClear = ()=>{
    let newText = "";
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text, setText] = useState("");
    return (
       <div>
        <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter some text" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-warning mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
         <button className="btn btn-light mx-1" onClick={handleCapitalizeClick}>Convert to Capitalise</button>
         <button className="btn btn-success mx-1" onClick={handleClear}>Clear</button>
         <h2 className="my-3">Your Text Summary</h2>
         <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
         <h2>Preview</h2>
         <p>{text}</p>
       </div>
     
       
    )
}

export default TextForm
