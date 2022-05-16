import React from "react"
import logo from "../../Assets/logo.png"


export default function Welcome (props) {
    
    function changeScreen () {
        props.setScreen("content")
    }


    return (
        <div className="welcome">
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button className="start-button" onClick={changeScreen}>Iniciar Recall!</button>
        </div>
        
    )
}