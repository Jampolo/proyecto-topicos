import "./contacto.css";

const Contacto = () => {
    return(
        <div>
            <li>Formulario de contacto</li>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Correo</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Asunto</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Escriba aquí</label>
                    <input type="text" className="texto"></input>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
};

export default Contacto;