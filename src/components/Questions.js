import React from "react"
// import QuestionBox from "./QuestionBox"




export default function Questions ({result, setResult}) {

    let newResult = [...result]
    arrayQuestions.sort(randomize)
    return (
        <>
            {arrayQuestions.map((el, index) => <EachQuestion question={el.question} answer={el.answer} key={index} index={index} result={result} setResult={setResult} newResult={newResult}/>)}
            <div className="footer">{newResult.length}/8 CONCLUÍDOS</div>
        </>
    )
}

//Questions Object

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


//Randomize sort questions

function randomize () {
    return Math.random() - 0.5;
}

//Questions

function EachQuestion ({question, answer, index, result, setResult, newResult}) {
    const [start, setStart] = React.useState("")
    React.useEffect(() => {
        setStart(<QuestionBox setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult}/>)
      }, [])
    
    

    return (
        <>
        	{start}
        </>
    )
}

function QuestionBox ({question, answer, index, result, setResult, start, setStart, newResult}) {

    function openQuestion () {
        setStart(<QuestionOpen setStart={setStart} start ={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} />)     
    }

    return (
        <div className="question">
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="play-outline" onClick={openQuestion}></ion-icon>
            </div>
    )
}


function QuestionOpen ({question, answer, index, result, setResult, start, setStart, newResult}) {

    function openAnswer () {
        setStart(<QuestionAnswer setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} />)
    }

    return (
            <div className="question-open">
                <h2>{question}</h2>
                <img src="./assets/setinha.png" onClick={openAnswer} alt="" />                
            </div>
    )
}



function QuestionAnswer ({question, answer, index, result, setResult, start, setStart, newResult}) {


    return (
            <div className="question-answer">
                <h2>{answer}</h2>
                <Buttons setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult}/>
            </div>
    )
}

function Buttons ({question, answer, index, result, setResult, start, setStart, newResult}) {

    function CloseAnswer () {
        setStart(<QuestionBox setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} />)
        
        newResult.push(1)
        setResult([...newResult])
    }

    return (
        <div className="button-container">
            <div className="button-answer red" onClick={CloseAnswer}><p>Não Lembrei</p></div>
            <div className="button-answer orange" onClick={CloseAnswer}><p>Quase não lembrei</p></div>
            <div className="button-answer green" onClick={CloseAnswer}><p>Zap!</p></div>
        </div>
    )
}