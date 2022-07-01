import './header.css';
import Login from './login';

const Header = () => {
    return(
        <div className='box1'>
            <img src="https://ih1.redbubble.net/image.1690522056.1916/st,small,507x507-pad,600x600,f8f8f8.jpg" height="150px"/>
            <div className="box2">
                <img src="https://cloudblogs.microsoft.com/industry-blog/wp-content/uploads/industry/2019/10/Doctor-case-study_carousel-HLTH-1024x465.webp" height="147px"/>
                <div className="box3">
                    <button type="button">Quiénes somos</button>
                    <button type="button">Especialidades</button>
                    <button type="button">Contacto</button>
                </div>
            </div>
            <div className='box4'>
                <Login/>
                <button className="reserva" type="button">Reservar hora</button>
            </div>
        </div>
    )
};

export default Header;