//import logo from './logo.svg';
import './App.css';
import Saludo from './practicas/saludo';
import Saludo2 from './practicas/Saludo2';
import Producto from './practicas/Producto';
import Contador from './practicas/Contador';

const elemento=<h1>Hola Mundo</h1>
const name='Jorge'
const elemento2=<h2>Hola {name}</h2>


function App() {
  return (
    <div className="App">
      {elemento}
      {elemento2}
      <Saludo/>
      <Saludo2/>
      <Producto nombre="Tablet" descripcion="Es un elemento electrónico" precio={500*3}/>
      <Producto nombre="Silla" imagen="/logo192.png" alternativo="imagen de silla" descripcion="Es un elemento de oficina" precio={100}/>
      <Contador/>      
    </div>
  );
}

export default App;
