import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import Content from './components/Content';


function App () {
    return (
        <>
            <Welcome />
            <Content />
        </>
    )
}



ReactDOM.render(<App />, document.querySelector(".root"))