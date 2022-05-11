import React from "react"


export default function Welcome () {
    const [hide, setHide] = React.useState("welcome")

    function hideAll () {
        if (hide === "welcome"){
        setHide("hidden")
        }
        else setHide("welcome")
    }

    return (
        <div className={hide}>
            <img src="assets/logo.png" alt="" />
            <h1>ZapRecall</h1>
            <button className="start-button" onClick={hideAll}>Iniciar Recall!</button>
        </div>
        
    )
}