import React, {useState} from 'react'
import './textbody.css'
import Buttons from './Buttons';



function Textbody(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const btnClick = (newText) => {
        setText(newText)
    }

    return (
        <div>
            <div className="container">
                <h2 className={`eth eth-${props.mode}`}>{props.heading}</h2>
                <div className='text-info'>
                    {text.length!==0 &&
                        <p className='text-info-part'>{text.split(" ").filter((char)=>{return char.length!==0}).length} Words & {text.length} Characters. It will take aproxx. {0.008* text.split(" ").filter((char)=>{return char.length!==0}).length} minutes to read</p>
                    }
                </div>
                <textarea className="typehere" value={text} id='myText' onChange={handleOnChange} name="textarea" rows="15"/>
            </div>
            <div className='btn-info'>
                <Buttons showAlert={props.showAlert} text={text} btnClick={btnClick}/>
            </div>
            <div className='view-container'>
                <h2 className={`preview preview-${props.mode}`}>Text Preview</h2>
                <p className='ntp'>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
        </div>
    )
}

export default Textbody
