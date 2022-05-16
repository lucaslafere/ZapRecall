import logo from "../Assets/logo-pequeno.png"

export default function Header ({setScreen}) {

    function changeScreen () {
        setScreen("login")
    }
    return (
        <div className="header">
            <img src={logo} alt="" onClick={changeScreen} />
            <h1 onClick={changeScreen}>ZapRecall</h1>
        </div>
    )
}