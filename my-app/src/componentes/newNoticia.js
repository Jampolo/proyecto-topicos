import axios from "axios";
import { useState } from "react";

const NewNoticia = () => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredBody, setEnteredBody] = useState("");

    const submitHandler = event => {
        event.preventDefault();
        const task = {
            titulo: enteredTitle,
            cuerpo: enteredBody
        };
        axios.post("http://localhost:5000/noticia", task).then(res => {

        });
    }

    const titleChangeHandler = event => {setEnteredTitle(event.target.value);};
    const bodyChangeHandler = event => {setEnteredBody(event.target.value);};

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Título</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div>
                <label>Cuerpo</label>
                <input type="text" value={enteredBody} onChange={bodyChangeHandler}></input>
            </div>
            <button type="submit">Agregar noticia</button>
        </form>
    );

}

export default NewNoticia;