import Buttons from "./Buttons"


export default function QuestionAnswer (props) {
    return (
            <div className="question-answer">
                <h2>{props.answer}</h2>
                <Buttons />
            </div>
    )
}