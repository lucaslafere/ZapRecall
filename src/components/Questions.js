import React from "react"
// import QuestionBox from "./QuestionBox"




export default function Questions ({result, setResult}) {

    let newResult = [...result];
    
    //---------------->  const iconsArray = []; isso aqui tem que passar por uma variavel de estado pra funcionar em Icons <--------------------- IMPORTANTE
    const [type, setType] = React.useState("question");
    const [mistakes, setMistakes] = React.useState([]);
    let newMistakes = [...mistakes];

    arrayQuestions.sort(randomize);
    return (
        <>
            {arrayQuestions.map((el, index) => <EachQuestion question={el.question} answer={el.answer} key={index} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes}/>)}

            <Footer  result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes}/>
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

function EachQuestion ({question, answer, index, result, setResult, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes}) {
    const [start, setStart] = React.useState("");
    React.useEffect(() => {
        setStart(<QuestionBox setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes}/>)
      }, []);
    
    

    return (
        <>
        	{start};
        </>
    )
}

function QuestionBox ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, el, mistakes, iconsArray, newMistakes, setMistakes}) {

    function openQuestion () {
        setStart(<QuestionOpen setStart={setStart} start ={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} />);
    }

    if (el === "question wrong") {
        iconsArray.push(el)
        return (
            <div className={el}>
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="close-circle" className="red"></ion-icon>
            </div>
        )
    }
    else if (el === "question middle"){
        iconsArray.push(el)
        return (
            <div className={el}>
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="help-circle" className="orange"></ion-icon>
            </div>
        )
    }

    else if (el === "question correct"){
        iconsArray.push(el)
        return (
            <div className={el}>
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="checkmark-circle" className="green"></ion-icon>
            </div>
        )
    }


    else return (
            
            <div className="question">
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="play-outline" className="black" onClick={openQuestion}></ion-icon>
            </div>
    )
}


function QuestionOpen ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes}) {

    function openAnswer () {
        setStart(<QuestionAnswer setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes}/>)
    }

    return (
            <div className="question-open">
                <h2>{question}</h2>
                <img src="./assets/setinha.png" onClick={openAnswer} alt="" />                
            </div>
    )
}



function QuestionAnswer ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes}) {


    return (
            <div className="question-answer">
                <h2>{answer}</h2>
                <Buttons setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes}/>
            </div>
    )
}

function Buttons ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes}) {

    function closeAnswer (el) {
        setStart(<QuestionBox setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} el={el} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes}/>)  
        setType(el);
        newResult.push(1);
        setResult([...newResult]);

        if (el === 'question wrong'){
            newMistakes.push(1);
            setMistakes([...newMistakes]);
        }

    }



    return (
        <div className="button-container">
            <div className="button-answer red" onClick={() => closeAnswer('question wrong')}><p>Não Lembrei</p></div>
            <div className="button-answer orange" onClick={() => closeAnswer('question middle')}><p>Quase não lembrei</p></div>
            <div className="button-answer green" onClick={() => closeAnswer('question correct')}><p>Zap!</p></div>
        </div>
    )
}

function Icons ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes}) {

    if (type === "question wrong") {
        return (
            <ion-icon name="close-circle" style= {{color: "red"}}></ion-icon>
        )
    }
    else if (type === "question middle") {
        return (
            <ion-icon name="help-circle" style= {{color: "orange"}}></ion-icon>

        )
    }
    else if (type === "question correct") {
        return (
            <ion-icon name="checkmark-circle" style= {{color: "green"}}></ion-icon>
        )
    }

    return (
        <></>
    )
}


function Footer ({result, setResult, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes}) {

    if (newResult.length === 8 && newMistakes.length === 0) {
        return (
            <div className="footer-big">
                <div className="result-class">
                    <img src="./Assets/party.png" alt="" />
                    <h1>Parabéns!</h1>
                </div>

                <h3>Você não esqueceu de nenhum flashcard!</h3>
                <h2>{newResult.length}/8 CONCLUÍDOS</h2>
                <div className="icons">
                    {<Icons result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray}/>}
                </div>
            </div>
        )
    }
    else if (newResult.length === 8 && newMistakes.length > 0) {
        return (
            <div className="footer-big">
                <div className="result-class">
                    <img src="./Assets/sad.png" alt="" />
                    <h1>Putz...</h1>
                </div>
                <h3>Ainda faltam alguns...
                    <br></br>
                    Mas não desanime!
                </h3>
                <h3></h3>
                <h2>{newResult.length}/8 CONCLUÍDOS</h2>
                <div className="icons">
                    {<Icons result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} />}
                </div>
            </div>
        )
    }
    return (
        <div className="footer">
            <h2>{newResult.length}/8 CONCLUÍDOS</h2>
            <div className="icons">
                {<Icons result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray}/>}
            </div>
        </div>
    )
}