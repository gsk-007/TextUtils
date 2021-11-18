import React, { useState } from 'react'


export default function TextForm(props) {

    const handelUpClick = () => {
        // console.log('I was clicked')
        setText(text.toUpperCase())
        props.showAlert('Converted to Uppercase', 'success')
    }
    const handelLowClick = () => {
        // console.log('I was clicked')
        setText(text.toLowerCase())
        props.showAlert('Converted to LowerCase', 'success')
    }
    const handelClearClick = () => {
        // console.log('I was clicked')
        setText('')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied to Clipboard', 'success')
    }

    const handleOnChange = (e) => {
        // console.log('On Change')
        setText(e.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: (props.mode === 'light') ? 'white' : '#3f494d', color: (props.mode === 'light') ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            </div>
            <div className="container my-2" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>({text === "" ? 0 : text.trim().split(" ").length} words and {text === "" ? 0 : text.length} characters)</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text ? text : "Enter Something in the above text box to preview it here"}</p>
            </div>
        </>
    )
}
