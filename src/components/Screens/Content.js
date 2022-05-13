import React from 'react';
import Header from '../Header';
import Questions from '../Questions';


export default function Content({setScreen}) {
    return (
        
        <div className="main">
            <Header setScreen={setScreen}/>
            <Questions />
            <div className="footer">0/8 CONCLUÍDOS</div>
        </div>
        
        
    )
}
