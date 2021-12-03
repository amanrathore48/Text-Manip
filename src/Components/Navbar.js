import React from 'react'
import './Navbar.css';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode}`}>
            <div className='nav-brand'>
                <h1 className={`brand brand-${props.mode}`}>Text-Manip</h1>
            </div>
            <div> 
                <label className="switch">
                    <input onClick={props.toggleMode} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    )
}

export default Navbar
