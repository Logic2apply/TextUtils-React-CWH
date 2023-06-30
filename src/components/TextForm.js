import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log(`UpperCase was clicked with text: ${text}`);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowClick = () => {
        // console.log(`LowerCase was clicked with text: ${text}`);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearClick = () => {
        // console.log(`clear text was clicked with text: ${text}`);
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const handleCamelClick = () => {
        // console.log(`camel case text was clicked with text: ${text}`);
        let newText = camelize(text)
        setText(newText)
        props.showAlert("Converted to camelCase", "success")
    }

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const handleTitleClick = () => {
        // console.log(`camel case text was clicked with text: ${text}`);
        let newText = titleCase(text)
        setText(newText)
        props.showAlert("Converted to Titlecase", "success")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        alert("Text copied")
        props.showAlert("Text copied", "success")
    }

    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }
    
    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value)
    }


    // const handle = (passValue) => {
        
    // }

    return (
        <>
            <div className='container my-4'>
                <h2 className="heading" style={{color: props.mode==='light'?'#272727':'#ebebeb'}}>
                    {props.heading}
                </h2>
                <div className="mb-3">
                    <textarea className="form-control tint" id="textarea" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.bgcolor, color: props.mode==='light'?'black':'#fff', borderColor: props.mode==='light'?'#555555':'#fff'}}></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UPPER CASE</button>
                <button className="btn btn-dark mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-dark mx-1" onClick={handleCamelClick}>Convert to camelCase</button>
                <button className="btn btn-dark mx-1" onClick={handleTitleClick}>Convert to Title Case</button>
                <button className="btn btn-dark mx-1" onClick={handleSpaceClick}>Remove extra spaces</button>
                <button className="btn btn-dark mx-1" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-4"  style={{color: props.mode==='light'? '#042743':'white'}}>
                <h4 className='h4 text-blue-500'>Your text summary</h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something to preview here."}</p>
            </div>

        </>
    )
}
