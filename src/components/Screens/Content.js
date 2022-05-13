import React from 'react';
import Header from '../Header';
import Questions from '../QuestionsFolder/Questions';
import Footer from '../Footer';


export default function Content({setScreen}) {
    return (
        
        <div className="main">
            <Header setScreen={setScreen}/>
            <Questions />
            <Footer />
        </div>
        
        
    )
}
