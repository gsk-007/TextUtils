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
        document.getSelection().removeAllRanges()
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
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handelUpClick}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handelLowClick}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handelClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCopy}>Copy to Clipboard</button>
            </div>
            <div className="container my-2" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>({text.split(" ").filter(e => e.length !== 0).length} words and {text.length} characters)</p>
                <p>{0.008 * text.split(" ").filter(e => e.length !== 0).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.trim() ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}
