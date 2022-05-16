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
            <h2>Ao iniciar, clique na setinha para abrir a pergunta.
                <br></br> 
                Ao clicar na próxima setinha (circular), aparecerá a resposta.
                <br></br>
                Responda <span className="green-text">"Zap!"</span>  caso saiba a resposta imediatamente, o botão <span className="orange-text">"Quase não lembrei"</span> se demorar mas lembrar, ou <span className="red-text">"Não lembrei"</span> caso não saiba a resposta!
            </h2>
            <button className="start-button" onClick={changeScreen}>Iniciar Recall!</button>
        </div>
        
    )
}