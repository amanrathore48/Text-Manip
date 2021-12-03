import React from 'react'
import './Buttons.css'

function Buttons(props) {
    const handleUp = () => {
        const newText = props.text.toUpperCase()
        props.btnClick(newText)
        props.showAlert("Converted To Uppercase", "Sucess")
    }
    const handleLow = () => {
        const newText = props.text.toLowerCase()
        props.btnClick(newText)
        props.showAlert("Converted To Lowercase", "Sucess")
    }
    const handleClr = () => {
        const newText = ""
        props.btnClick(newText)
        props.showAlert("Cleared", "Sucess")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(props.text)
        props.showAlert("Text Copied", "Sucess")
    }
    const handleExtraSpace = () => {
        const newText = props.text.replace(/\s+/g, ' ').trim()
        props.btnClick(newText)
        props.showAlert("Extra Spaces Are Removed", "Sucess")
    }
    const capitalize = () => {
        const newText = props.text.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
        props.btnClick(newText)
        props.showAlert("Capitalized", "Sucess")
    };
    return (
        <div className='btn-box'>
            <button disabled={props.text.length===0} className="btn caps" onClick={capitalize}>Capitalize</button>
            <button disabled={props.text.length===0} className="btn Uppercase" onClick={handleUp}>Uppercase</button>
            <button disabled={props.text.length===0} className="btn Lowercase" onClick={handleLow}>Lowercase</button>
            <button disabled={props.text.length===0} className="btn clr" onClick={handleClr}>Clear Text</button>
            <button disabled={props.text.length===0} className="btn clr" onClick={handleCopy}>Copy Text</button>
            <button disabled={props.text.length===0} className="btn Spcrmv" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            {/* <div className="dropdown">
                <button className="btn">More</button>
                <div className="dropdown-content">
                    <button className="danger" onClick={handleClr}>Add</button>
                    <button className="danger" onClick={handleClr}>Add</button>
                </div>
            </div> */}
            
        </div>
    )
}

export default Buttons
