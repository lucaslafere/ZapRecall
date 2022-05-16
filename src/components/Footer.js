import Icons from "./Icons"
import ResetButton from "./ResetButton"
import party from "../Assets/party.png"
import sad from "../Assets/sad.png"

export default function Footer ({result, setResult, newResult, type, setType, mistakes, iconsArray, newMistakes, setMistakes, icons, setIcons, setScreen}) {

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