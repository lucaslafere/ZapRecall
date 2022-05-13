import QuestionAnswer from "./QuestionAnswer"

export default function QuestionOpen ({answer, question, setStart}) {

    function openAnswer () {
        setStart(<QuestionAnswer answer={answer} setStart={setStart} />)
    }

    return (
            <div className="question-open">
                <h2>{question}</h2>
                <img src="./assets/setinha.png" onClick={openAnswer} alt="" />                
            </div>
    )
}