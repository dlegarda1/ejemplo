import './App.css';
import Contador from './practicas/Contador';
import Contclick from './practicas/Contclick';
import Titulo from './practicas/Titulo';
import Contador2 from './practicas/Contador2';


function App() {
  return (
    <div className="App">
     <Contador inicial="10" incremento="2" decremento="3"/>
     <Contador inicial="2" incremento="12" decremento="4"/>
     <Contador/>
     <Contclick/>
     <Titulo/>
     <Contador2/>
    </div>
  );
}

export default App;
