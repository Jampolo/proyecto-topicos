import axios from "axios";
import { useState } from "react";
import "./newDoctor.css";

const NewDoctor = () => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredSpec, setEnteredSpec] = useState("");
    const [enteredOffice, setEnteredOffice] = useState("");
    const [enteredPhone, setEnteredPhone] = useState("");
    const [enteredSchedule, setEnteredSchedule] = useState("");

    const submitHandler = event => {
        event.preventDefault();
        const task = {
            name: enteredName,
            spec: enteredSpec,
            office: enteredOffice,
            phone: enteredPhone,
            schedule: enteredSchedule
        };
        axios.post("http://localhost:5000/doctor", task).then(res => {

        });
    }

    const nameChangeHandler = event => {setEnteredName(event.target.value);};
    const specChangeHandler = event => {setEnteredSpec(event.target.value);};
    const officeChangeHandler = event => {setEnteredOffice(event.target.value);};
    const phoneChangeHandler = event => {setEnteredPhone(event.target.value);};
    const scheduleChangeHandler = event => {setEnteredSchedule(event.target.value);};

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label className="labels">Nombre</label>
                <input type="text" value={enteredName} onChange={nameChangeHandler}></input>
            </div>
            <div>
                <label className="labels">Especialidad</label>
                <input type="text" value={enteredSpec} onChange={specChangeHandler}></input>
            </div>
            <div>
                <label className="labels">Oficina</label>
                <input type="text" value={enteredOffice} onChange={officeChangeHandler}></input>
            </div>
            <div>
                <label className="labels">Teléfono</label>
                <input type="text" value={enteredPhone} onChange={phoneChangeHandler}></input>
            </div>
            <div>
                <label className="labels">Horario</label>
                <input type="text" value={enteredSchedule} onChange={scheduleChangeHandler}></input>
            </div>
            <button type="submit">Agregar especialista</button>
        </form>
    );

}

export default NewDoctor;