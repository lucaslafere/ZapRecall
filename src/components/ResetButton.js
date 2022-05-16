export default function ResetButton ({setScreen}) {
    return (
        <div className="button bounce" onClick={reset}><h2>REINICIAR RECALL</h2></div>
    )

    function reset () {
        setScreen('login')
    }
}