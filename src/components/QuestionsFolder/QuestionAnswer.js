import Buttons from "./Buttons"


export default function QuestionAnswer ({answer, setStart}) {


    return (
            <div className="question-answer">
                <h2>{answer}</h2>
                <Buttons setStart={setStart}/>
            </div>
    )
}