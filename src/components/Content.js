import React from 'react';
import Header from './Header';


export default function Content() {
    return (
        
        <div className="main">
            <Header />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <div className="footer">0/4 CONCLUÍDOS</div>
        </div>
        
        
    )
}

function Question(props) {
    return (
        <div className="question">
            <h2>Pergunta 1</h2>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}