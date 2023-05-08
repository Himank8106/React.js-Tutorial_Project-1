import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const upperCaseOnClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Success", "Converted to Upper Case !!");
    }
    
    const lowerCaseOnClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Success", "Converted to Lower Case !!");
    }

    const clearTextOnClick = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert("Success", "Text Cleared !!");
    }
    
    const copyTextOnClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Success", "Copied to Clipboard !!");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Success", "Text will be read !!");
    }
    
    // State
    const [text, setText] = useState("");
    // You can write anything in useState() bracket which will be printed by default in the textarea.
    // text = 'new Text';  --> Wrong way to set text
    return (
        <>
            <div>
                <div className="container">
                    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#696a6a' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: props.mode === 'dark' ? '2px solid white' : '2px solid black' }} placeholder ="Enter text here" id="myBox" rows="8"></textarea>
                </div>
                <div className="container my-2">
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upperCaseOnClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={lowerCaseOnClick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearTextOnClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyTextOnClick}>Copy Text</button>
                    <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
                </div>
                {/* <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h3>Your text summary</h3>
                    <p>Characters: {text.length}</p>
                    <p>Words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
                    <p>This can be read in: {0.008 * text.split(" ").length} minutes</p>
                </div> */}

                <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                    {/* <h2>Preview</h2>
                    <p>{text.length>0?text:"Nothing to preview!"}</p> */}
                </div>
            </div>
        </>
    )
}