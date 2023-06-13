import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log(`UpperCase was clicked with text: ${text}`);
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = () => {
        // console.log(`UpperCase was clicked with text: ${text}`);
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value)
    }

    return (
        <>
            <div className='container my-4'>
                <h2 className="heading">
                    {props.heading}
                </h2>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-dark mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-4">
                <h4 className='h4'>Your text summary</h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        
        </>
    )
}
