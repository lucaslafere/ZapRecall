import React from 'react';
import Header from '../Header';
import Questions from '../Questions';


export default function Content({setScreen}) {
    const [result, setResult] = React.useState([])
    return (
        
        <div className="main">
            <Header setScreen={setScreen}/>
            <Questions result={result} setResult={setResult}/>
            <div className="footer">{result.length}/8 CONCLUÍDOS</div>
        </div>
        
        
    )
}
