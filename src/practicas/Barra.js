import { Link } from "react-router-dom";



const Barra = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
        
      </ul>
    </nav>

  );
};

export default Barra;