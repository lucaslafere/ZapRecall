//Icones que aparecem nas perguntas e no footer

export default function Icons ({type}) {

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