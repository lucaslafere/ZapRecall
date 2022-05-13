export default function Buttons (props) {

    function CloseAnswer () {
        props.setOpen("question-closed")
    }

    return (
        <div className="button-container">
            <div className="button-answer red" onClick={CloseAnswer}><p>Não Lembrei</p></div>
            <div className="button-answer orange" onClick={CloseAnswer}><p>Quase não lembrei</p></div>
            <div className="button-answer green" onClick={CloseAnswer}><p>Zap!</p></div>
        </div>
    )
}
