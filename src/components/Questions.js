export default function Questions () {
    return (
        <>
            {arrayQuestions.map(el => <EachQuestion question={el.question} answer={el.answer} />)}
        </>
    )
}

const arrayQuestions = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __ ", answer: "Uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "Letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer: "Expressões"},
    {question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __", answer: "Passar diferentes informações para componentes "},
    {question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]
function EachQuestion (props) {
    return (
        <>
            <div className="question">
                <h2>Pergunta 1</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question-open">
                <h2>{props.question}</h2>                
            </div>
            <div className="question-answer">
                <h2>{props.answer}</h2>
                <Buttons />
            </div>
        </>
    )
}

function Buttons () {
    return (
        <div className="button-container">
            <div className="button-answer red"><p>Não Lembrei</p></div>
            <div className="button-answer orange"><p>Quase não lembrei</p></div>
            <div className="button-answer green"><p>Zap!</p></div>
        </div>
    )
}