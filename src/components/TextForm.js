import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Text changed to uppercase.','success');
  };
  const handleLOClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Text changed to lowercase.','success');
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("txtBox");
    // newText.select();
    let cursorStart = newText.selectionStart;
    let cursorEnd = newText.selectionEnd;

    let copytext = newText.value.substring(cursorStart, cursorEnd);
    navigator.clipboard.writeText(copytext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="container mb-3">
          <label htmlFor="txtBox" className="form-label" style={{color:props.mode==='light'?'#042743':'white'}}>
            {props.textHeader}
          </label>
          <textarea style={{cursor: 'pointer',backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'#042743':'white'}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="txtBox"
            rows="8"
            placeholder={props.textHeader}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLOClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-light mx-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button
          className="btn btn-warning mx-1"
          onClick={handleExtraSpaceClick}
        >
          Remove Extra Spaces
        </button>

        <button className="btn btn-info mx-1" onClick={handleCopyClick}>
          Copy Selected Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
        <h1>Your text summary</h1>
        <p>
          {/* {text.length>0? text.split(" ").length: 0} words, {text.length} characters. */}
          {text.length>0? text.trim().split(/[ ]+/).join(" ").split(" ").length: 0} words, {text.length} characters.
        </p>
        <p>{text.length>0? 0.008 * text.split(" ").length : 0} Minutes to read</p>
      </div>

      <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
        <h1 >Preview</h1> 
        <div>{text.length>0?text:props.textHeader}</div>
      </div>
    </>
  );
}
