import React, {useState} from 'react'
import "./Textform.css"

export default function Textform(props) {
  const [text, setText] =useState("");
  const handleOnChange=(event)=>{
   setText(event.target.value )
  }
 const upClick= ()=>{
  setText(text.toUpperCase())
  }
  const lowerclick=()=>{
    setText(text.toLowerCase())
  }
  const clear=()=>{
  setText('')
  }
  const copy=()=>{
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    }
    const handleSpaces = () => {
      // const temp = text.trim();
      // setText(temp);           
      // above code is for removing first and end spaces
      const temp=text.split(/[ ]+/)
      setText(temp.join(" "));
      // use can use replace here also
  }
  return (
    <div>
    <div className='cont p-3' style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'black',color: props.mode === 'light'?'black':'white'}} placeholder="Enter your text here" id="myBox" rows="6"></textarea>
       </div>
        
            <button className='btn btn-primary'onClick={upClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={lowerclick}>Convert to Lowercase</button>
            <button className='btn btn-success ' id='button' onClick={clear}>Clear All</button>
            <button className="btn btn-primary my-3 mx-2 " onClick={handleSpaces}>Remove Spaces</button>
            <button className='btn btn-primary' onClick={copy}>copy text</button>
       </div>
    <div className='cont p-3' style={{color:props.mode === 'dark'?'white':'black'}} >
      <h2>Your text summary</h2>
     <p className="lead">characters:{" " + text.length}   and  words: {text.split(/\s+/).filter((elment)=>{return elment.length!==0}).length }</p>
     <h3>preview</h3>
     <p className="lead">{text.length>0?text:'Enter text to preview'}</p>
    </div>
 </div>
  )
}
