import React from "react"
import logo from "../../Assets/logo.png"
import audio from "../../Assets/Clash-clash.mp3"


export default function Welcome (props) { 
    const audioElement = new Audio()
    audioElement.src = audio
    audioElement.volume = 0.1
    function changeScreen () {
        props.setScreen("content")
        audioElement.play()
    }


    return (
        <div className="welcome">
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button className="start-button" onClick={changeScreen}>Iniciar Recall!</button>
        </div>
        
    )
}