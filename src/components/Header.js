export default function Header ({setScreen}) {

    function changeScreen () {
        setScreen("login")
    }
    return (
        <div className="header">
            <img src="assets/logo-pequeno.png" alt="" onClick={changeScreen} />
            <h1 onClick={changeScreen}>ZapRecall</h1>
        </div>
    )
}