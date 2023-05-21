import "./style/Input.scss"

function Input() {

    return (
            <form id="inputField" method="post">
                <input id="username" name="name" placeholder="Your name"></input>
                <input id="message" name="msg" placeholder="message"></input>
                <button id="submit"><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M780 856V682q0-54-38-92t-92-38H234l154 154-42 42-226-226 226-226 42 42-154 154h416q78 0 134 55.5T840 682v174h-60Z" /></svg></button>
            </form>
    )
}

export default Input;