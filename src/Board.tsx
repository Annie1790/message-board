import "./style/Board.scss"

import { useEffect, useState } from "react";

interface Data {
    [key: number]: {
        name: string;
        msg: string;
        date: string;
        color: string;
    }
}

function Board() {

    useEffect(() => {
        const interval = setInterval(() => {
            retrieveMsg();
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    let [data, setData] = useState({} as Data);

    async function retrieveMsg() {
        try {
            const response = await fetch("http://localhost:4000/", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (response.ok) {
                const result = await response.json();
                console.log(`GET data ${JSON.stringify(result)}`);
                setData(result);
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    function returnUserNameMsg() {
        const arr = [];
        for (let segment in data) {
            arr.push(
                < div className="msgBubble" style={{backgroundColor: data[segment].color}}>
                    <span className="msgName">{data[segment].name}</span>
                    <span className="msgDate">{data[segment].date}</span>
                    <p className="msgBody">{data[segment].msg}</p>
                </div >
            )
        }
        return arr;
    }

    return (
        <div id="msgGrid">
            {returnUserNameMsg()}
        </div>
    )
};

export default Board;