import logo from './logo.svg';
import './App.css';
import './Cuerpo.css';
import Navegacion from './Navegacion';
import Registro from './Header';
import Cuerpo from './Cuerpo';
import Seguidores from './Seguidores';
import CuerpoGestorTareas from './CuerpoGestorTareas';


function App() {
  return (
    <div className="App">
      <div>
      <Registro/>
      </div>
      <div className='pg-principal-divisiones'>
        <Navegacion/>
        <Cuerpo/>
        <CuerpoGestorTareas/>
        <Seguidores/>
      </div>
    </div>
  );
}

export default App;
