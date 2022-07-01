import { useState } from "react"
import "./login.css";

const Login = props =>{
    const [enteredUserText, setEnteredUserText] = useState('');
    const [enteredPswdText, setEnteredPswdText] = useState('');

    const userChange = event => {
        setEnteredUserText(event.target.value);
    }
    const pswdChange = event => {
        setEnteredPswdText(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={enteredUserText} onChange={userChange} placeholder="Usuario"/>
            <input type="text" value={enteredPswdText} onChange={pswdChange} placeholder="Password"/>
            <button className="entrar" type='submit'>Log in</button>
        </form>
    )
};

export default Login;