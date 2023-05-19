import "./style/Board.scss"

import { useState } from "react";

Date.now()

const date = new Date();
const todayDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
const todayTime = date.getHours() + ":" + date.getMinutes()

const testData: testData = {
    1: {
        name: "Alex",
        msg: "hello",
        date: todayDate + " " + todayTime
    },
    2: {
        name: "Aniko",
        msg: "what",
        date: todayDate + " " + todayTime
    },
    3: {
        name: "Bela",
        msg: "I am your father",
        date: todayDate + " " + todayTime
    },
    4: {
        name: "Father",
        msg: "Mother",
        date: todayDate + " " + todayTime
    },
    5: {
        name: "yes",
        msg: "no",
        date: todayDate + " " + todayTime
    },
    6: {
        name: "what",
        msg: "yes",
        date: todayDate + " " + todayTime
    },
    7: {
        name: "jvosvjdflioivdf",
        msg: "jfsikjdsilkvhsdli",
        date: todayDate + " " + todayTime
    },
    8: {
        name: "fjisdlvjdsoisd",
        msg: "hvuieioeoie",
        date: todayDate + " " + todayTime
    }
}

interface testData {
    [key: number]: {
        name: string;
        msg: string;
        date: string;
    }
}

function Board() {

    let [data, setData] = useState(testData);

    //fetch, data equals to testData

    function returnUserNameMsg() {
        const arr = [];
        for (let segment in data) {
            arr.push(
                < div className="msgBubble" style={randomColor()}>
                    <span className="msgName">{data[segment].name}</span>
                    <span className="msgDate">{data[segment].date}</span>
                    <p className="msgBody">{data[segment].msg}</p>
                </div >
            )
        }
        return arr;
    }

    function randomColor() {
        const hex = ["#f4d35e", "#b8b8ff", "#ecf39e", "#fdc5f5", "#ff0054", "#ffb100", "fb8b24"]
        const result = Math.floor(Math.random()* hex.length-1);
        const style:React.CSSProperties = {
            backgroundColor: hex[result]
        };
        return style;
    }

    return (
        <div id="msgGrid">
            {returnUserNameMsg()}
        </div>
    )
};

export default Board;