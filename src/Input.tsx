import { useEffect, useState } from "react";
import "./style/Input.scss"


function Input() {
    const [data, setData]: any = useState<handleSub>();
    const [counter, setCounter]: any = useState(1);
    const date = new Date();
    const todayDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const todayTime = date.getHours() + ":" + date.getMinutes();

    async function sendMsg(data: Object) {
        try {
            const response = await fetch("http://localhost:4000/", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            console.log(`POST data: ${result}`)
        }
        catch (error) {
            console.error(error)
        }
    }

    interface handleSub {
        [key: number]: {
            name: string;
            msg: string;
            date: string;
        }
    }

    const handleSub = (event: any) => {
        event.preventDefault();
        setCounter(counter + 1);
        const result = {
            ...data,
            [counter]: {
                name: event.target.name.value,
                msg: event.target.msg.value,
                date: `${todayDate} ${todayTime}`
            }
        }
        setData(result);
        sendMsg(result);
        event.target.name.value = "";
        event.target.msg.value = "";
    }

    return (
        <form id="inputField" onSubmit={(event) => { handleSub(event); }}>
            <input id="username" name="name" placeholder="Your name"></input>
            <input id="message" name="msg" placeholder="message"></input>
            <button id="submit" type="submit" ><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M780 856V682q0-54-38-92t-92-38H234l154 154-42 42-226-226 226-226 42 42-154 154h416q78 0 134 55.5T840 682v174h-60Z" /></svg></button>
        </form>
    )
}

export default Input;