import ReactDOM from 'react-dom';
import React from 'react';
import Welcome from './components/Welcome';
import Content from './components/Content';


function App () {
    const [screen, setScreen] = React.useState("login")

    
    return (
        <>
            {screen === 'login' ? <Welcome setScreen={setScreen}/> : <Content setScreen={setScreen}/>}
        </>
    )
}



ReactDOM.render(<App />, document.querySelector(".root"))