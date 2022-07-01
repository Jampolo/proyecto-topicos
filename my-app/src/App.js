import logo from './logo.svg';
import './App.css';
import Header from './componentes/header';
import Login from './componentes/login';
import Footer from './componentes/footer';
import NewNoticia from './componentes/newNoticia';
import Noticias from './componentes/noticias';
import NewDoctor from './componentes/newDoctor';
import DocList from './componentes/DocList';
import Mision from './componentes/mision';
import Contacto from './componentes/contacto';

function App() {
  return (
    <div>
      <Header/>
      <div className='body'>
        <NewNoticia/>
        <Noticias/>
        <NewDoctor/>
        <DocList/>
        <Mision/>
        <Contacto/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
