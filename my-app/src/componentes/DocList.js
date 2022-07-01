import React, {useEffect, useState} from 'react';
import axios from "axios";

const DocList = () => {
    const [tasks, setTasks] = useState([]);

    const handleGetData = () => {
        axios.get("http://localhost:5000/doctor").then(res => {
          const data = res.data;
          setTasks(data)
        })
    }

    const deleteHandler = id => {
        axios.delete(`http://localhost:5000/doctor/${id}`);
    }

    const patchHandler = id => {
        axios.patch(`http://localhost:5000/doctor/${id}`, { schedule: "asd" })
    }

    useEffect(() => {
        handleGetData();
    }, []);

    return(
        <div>
            <ul>
                {tasks.map(item => {
                    return(
                        <li key={item._id}>
                            {item.name} - {item.spcc} - {item.office} - {item.office} - {item.schedule}
                            <button type="button" onClick={() => patchHandler(item._id)}>Editar</button>
                            <button onClick={() => deleteHandler(item._id)}>Borrar</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default DocList;