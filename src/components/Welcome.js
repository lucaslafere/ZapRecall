import React from "react"


export default function Welcome (props) {
    
    function changeScreen () {
        props.setScreen("content")
    }


    return (
        <div className="welcome">
            <img src="assets/logo.png" alt="" />
            <h1>ZapRecall</h1>
            <button className="start-button" onClick={changeScreen}>Iniciar Recall!</button>
        </div>
        
    )
}