import ReactDOM from 'react-dom';
import React from 'react';
import Welcome from './components/Screens/Welcome';
import Content from './components/Screens/Content';
import './reset.css'
import './style.css'


function App () {
    const [screen, setScreen] = React.useState("login")

    
    return (
        <>
            {screen === 'login' ? <Welcome setScreen={setScreen}/> : <Content setScreen={setScreen}/>}
        </>
    )
}



ReactDOM.render(<App />, document.querySelector(".root"))