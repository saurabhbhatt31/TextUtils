import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertmsg('   :Changed in Upper Case', 'success');
  }
  const handleOnchange = (event) => {
    console.log('onchanged invoked');
    setText(event.target.value);
  }
  const handleLowerClick = ()=>
  {
    let newText2 = text.toLowerCase();
    props.alertmsg('   :Changed in Lower Case', 'success');
    setText(newText2);
  }
  const copyToCliboard=()=>
  {
    navigator.clipboard.writeText(text);
    props.alertmsg('   :Copied the text', 'success');
  } 
  const [text, setText] = useState('');
  const [textforPreview, setPreview] = useState('Nothing')
  return (
    <>
    <div className="container upperwrapper">
      <div className="container">
        <div className="my-3" style= {{color : props.mode==='light'?'black':'white'}}>
          <label labelfor="exampleFormControlTextarea1" className="form-label">{props.title1}</label>
          <textarea className="form-control" onChange={handleOnchange} id="myTextBox" rows="3" value={text} style = {{color : props.mode==='light'?'black':'white',backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>Click to Chane In Upper Case</button>
        <button type="button" className="btn btn-outline-info mx-5"onClick={handleLowerClick}>Click to Chane In Lower Case</button>
        <button type="button" className="btn btn-outline-info"onClick={copyToCliboard}>Copy to Clipboard</button>
        <div className='my-3' style = {{color : props.mode==='light'?'black':'white'}}>
          <h3>Your Text summary</h3>
          <p>Count of Words :- {text.split(" ").length}</p>
          <p>Count of Characters :- {text.length}</p>
          <p>Minutes read :- {0.088*text.split(" ").length}</p>
          <h4>Preview</h4> 
          <p>{text.length ===0 ? "Enter something in above box to preview here..." : text}</p>
        </div>
      </div>
      </div>

    </>
  )
}