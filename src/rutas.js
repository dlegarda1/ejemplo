//archivo de rutas

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Acerca from "./Páginas/Acerca";
import Inicio from "./Páginas/Inicio";
import Registro from "./Páginas/Registro";

function Rutas(){
    return(
        <Router>           
            <Switch>
                <Route path="/registro" component={<Registro/>}></Route>                
                <Route path="/acerca" component={<Acerca/>}></Route>
                <Route path="/" exact component={<Inicio/>}></Route>                    
            </Switch>
        </Router>
    )
}

export default Rutas;
