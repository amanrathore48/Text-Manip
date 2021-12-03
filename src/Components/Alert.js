import React, {useState} from 'react'
import "./Alert.css"

function Alert(props) {
    const [alertStyle, setAlertStyle] = useState({
        display: 'block'
    })
    const closeAlert=()=>{
        setAlertStyle({
            display:'none'
        })
    }
    return (
        <div className='alert-box'>
            {props.alert && <div style={alertStyle} className={`alert alert-${props.alert.type}`}>
            <span class="closebtn" onClick={closeAlert}>&times;</span>
                <b><i>{props.alert.type}</i></b>: {props.alert.msg}
            </div>}
        </div>
        
    )
}

export default Alert
