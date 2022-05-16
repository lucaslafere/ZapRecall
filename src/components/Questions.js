import React from "react"
import setinha from "../Assets/setinha.png"
import party from "../Assets/party.png"
import sad from "../Assets/sad.png"
// import QuestionBox from "./QuestionBox"




export default function Questions ({result, setResult, setScreen}) {

    let newResult = [...result];
    
    
    const [type, setType] = React.useState("question");
    const [mistakes, setMistakes] = React.useState([]);
    const [icons, setIcons] = React.useState([]);
    let iconsArray = [...icons];
    let newMistakes = [...mistakes];

    arrayQuestions.sort(randomize);
    return (
        <>
            {arrayQuestions.map((el, index) => <EachQuestion question={el.question} answer={el.answer} key={index} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons}/>)}

            <Footer  result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons} setScreen={setScreen}/>
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

function EachQuestion ({question, answer, index, result, setResult, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons}) {
    const [start, setStart] = React.useState("")
    React.useEffect(() => {
        setStart(<QuestionBox setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons}/>)
      }, [])
    
    

    return (
        <>
        	{start}
        </>
    )
}

function QuestionBox ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, el, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons}) {

    function openQuestion () {
        setStart(<QuestionOpen setStart={setStart} start ={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons} />);
    }

    if (el === "question wrong") {
        
        return (
            <div className={el}>
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="close-circle" className="red"></ion-icon>
            </div>
        )
    }
    else if (el === "question middle"){
        
        return (
            <div className={el}>
                <h2>Pergunta {index+1}</h2>
                <ion-icon name="help-circle" className="orange"></ion-icon>
            </div>
        )
    }

    else if (el === "question correct"){
        
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


function QuestionOpen ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons}) {

    function openAnswer () {
        setStart(<QuestionAnswer setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons}/>)
    }

    return (
            <div className="question-open">
                <h2>{question}</h2>
                <img src={setinha} onClick={openAnswer} alt="" />                
            </div>
    )
}



function QuestionAnswer ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons}) {


    return (
            <div className="question-answer">
                <h2>{answer}</h2>
                <Buttons setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons}/>
            </div>
    )
}

function Buttons ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons}) {

    function closeAnswer (el) {

        if (el === 'question wrong'){
            newMistakes.push(1);
            setMistakes([...newMistakes]);
            iconsArray.push(el)
            
        }
        else if (el === 'question middle'){
            iconsArray.push(el)
            
        }
        else if (el === 'question correct'){
            iconsArray.push(el)
            
        }

        setStart(<QuestionBox setStart={setStart} start={start} question={question} answer={answer} index={index} result={result} setResult={setResult} newResult={newResult} type={type} setType={setType} el={el} mistakes={mistakes} iconsArray={iconsArray} newMistakes={newMistakes} setMistakes={setMistakes} icons={icons} setIcons={setIcons}/>)  
        setType(el);
        newResult.push(1);
        setResult([...newResult]);
        setIcons([...iconsArray])
        console.log(icons)
        console.log(iconsArray)
        

    }



    return (
        <div className="button-container">
            <div className="button-answer red" onClick={() => closeAnswer('question wrong')}><p>Não Lembrei</p></div>
            <div className="button-answer orange" onClick={() => closeAnswer('question middle')}><p>Quase não lembrei</p></div>
            <div className="button-answer green" onClick={() => closeAnswer('question correct')}><p>Zap!</p></div>
        </div>
    )
}

function Icons ({question, answer, index, result, setResult, start, setStart, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons}) {

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


function Footer ({result, setResult, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons, setScreen}) {

    if (newResult.length === 8 && newMistakes.length === 0) {
        return (
            <div className="footer-big">
                <div className="result-class">
                    <img src={party} alt="" />
                    <h1>Parabéns!</h1>
                </div>

                <h3>Você não esqueceu de nenhum flashcard!</h3>
                <h2>{newResult.length}/8 CONCLUÍDOS</h2>
                <div className="icons">
                    {icons.map((el, index) => <Icons key={index} result={result} setResult={setResult} newResult={newResult} type={el} setType={setType} mistakes={mistakes} iconsArray={iconsArray} icons={icons} setIcons={setIcons}/>)}
                </div>
                <ResetButton setScreen={setScreen}/>
            </div>
        )
    }
    else if (newResult.length === 8 && newMistakes.length > 0) {
        return (
            <div className="footer-big">
                <div className="result-class">
                    <img src={sad} alt="" />
                    <h1>Putz...</h1>
                </div>
                <h3>Ainda faltam alguns...
                    <br></br>
                    Mas não desanime!
                </h3>
                <h3></h3>
                <h2>{newResult.length}/8 CONCLUÍDOS</h2>
                <div className="icons">
                    {icons.map((el, index) => <Icons key={index} result={result} setResult={setResult} newResult={newResult} type={el} setType={setType} mistakes={mistakes} iconsArray={iconsArray} icons={icons} setIcons={setIcons}/>)}
                </div>
                <ResetButton setScreen={setScreen}/>
            </div>
        )
    }
    return (
        <div className="footer">
            <h2>{newResult.length}/8 CONCLUÍDOS</h2>
            <div className="icons">
                {icons.map((el, index) => <Icons key={index} result={result} setResult={setResult} newResult={newResult} type={el} setType={setType} mistakes={mistakes} iconsArray={iconsArray} icons={icons} setIcons={setIcons}/>)}
            </div>
        </div>
    )
}


function ResetButton ({setScreen}) {
    return (
        <div className="button bounce" onClick={reset}><h2>REINICIAR RECALL</h2></div>
    )

    function reset () {
        setScreen('login')
    }
}