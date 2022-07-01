import "./contacto.css";

const Contacto = () => {
    return(
        <div>
            <li>Formulario de contacto</li>
            <form>
                <div>
                    <label className="labels">Nombre</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label className="labels">Correo</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label className="labels">Asunto</label>
                    <input type="text"></input>
                </div>
                <div>
                    <textarea type="text" className="texto"></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
};

export default Contacto;