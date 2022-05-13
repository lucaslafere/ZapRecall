import QuestionOpen from "./QuestionOpen"

export default function QuestionBox (props) {

    function openQuestion () {
        props.setStart(<QuestionOpen question={props.question} setStart={props.setStart} answer={props.answer} />)     
    }

    return (
        <div className="question">
                <h2>Pergunta </h2>
                <ion-icon name="play-outline" onClick={openQuestion}></ion-icon>
            </div>
    )
}