import logo from './logo.svg';
import './App.css';
import Header from './componentes/header';
import Login from './componentes/login';
import Footer from './componentes/footer';
import NewNoticia from './componentes/newNoticia';
import Noticias from './componentes/noticias';

function App() {
  return (
    <div>
      <Header/>
      <div className='body'>
        <NewNoticia/>
        <Noticias/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
