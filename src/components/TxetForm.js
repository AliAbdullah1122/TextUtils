import React, { useState } from "react";

export default function TxetForm(props) {
  const [text, setText] = useState("");
  const handleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase",'success')
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase",'success')
  };
  const handleclearText = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text is Cleared",'success')
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied to clipboard",'success')
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces is remooved",'success')
    
  };
  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743",}}>
        <h2>{props?.label}</h2>

        <div className="mb-3">
          {/* <label for="exampleFormControlTextarea1" className="form-label">{props?.label}</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>

        <button onClick={handleupClick} type='button' disabled={text.replace(/\s/g, '').length < 1} className="btn btn-primary mx-1">
          Convert To UpperCase
        </button>
        <button onClick={handleLoClick} type='button' disabled={text.replace(/\s/g, '').length < 1} className="btn btn-primary mx-1">
          Convert To LowerCase
        </button>
        <button onClick={handleclearText} type='button' disabled={text.replace(/\s/g, '').length < 1} className="btn btn-primary mx-1">
          Clear Text
        </button>
        <button onClick={handleCopy} type='button' disabled={text.replace(/\s/g, '').length < 1} className="btn btn-primary mx-1">
          Copy Text
        </button>
        <button onClick={handleRemoveSpace} type='button' disabled={text.replace(/\s/g, '').length < 1} className="btn btn-primary mx-1">
          Remove Space
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743",}}>
        <h1>Your Text Summary</h1>
        <p>
  {text.trim().length > 0
    ? `${text.trim().split(" ").length} words and ${text.length} characters`
    : "0 words and 0 characters"
  }
</p>
        <p>{0.008 * text.split(" ").length} Minnutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in text box above to preview it"}
        </p>
      </div>
    </>
  );
}
