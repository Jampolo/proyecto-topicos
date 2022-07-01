import React, {useEffect, useState} from 'react';
import axios from "axios";

const Noticias = () => {
    const [tasks, setTasks] = useState([]);

    const handleGetData = () => {
        axios.get("http://localhost:5000/noticia").then(res => {
          const data = res.data;
          setTasks(data)
        })
    }

    const deleteHandler = id => {
        axios.delete(`http://localhost:5000/noticia/${id}`);
    }

    const patchHandler = id => {
        axios.patch(`http://localhost:5000/noticia/${id}`, { cuerpo: "asd" })
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
                            {item.titulo} - {item.cuerpo} - {item.date}
                            <button type="button" onClick={() => patchHandler(item._id)}>Editar</button>
                            <button onClick={() => deleteHandler(item._id)}>Borrar</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Noticias;