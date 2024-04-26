import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acerca from "./Páginas/Acerca";
import Inicio from "./Páginas/Inicio";
import Registro from "./Páginas/Registro";
import Barra from "./practicas/Barra";


function Rutas() {
  return (
    <BrowserRouter>
    <Barra/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas;
