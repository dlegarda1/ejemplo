import React from "react";
import {useState} from "react";


function Frutas(props){
    <li>Tipo de fruta {props.fruta}</li>
}

function Saludo({name}){
    return(
        <h1>Hola {name}</h1>
    )
}

function Formulario(){
    const [entradas,setEntradas]=useState({});

    const frutas=["Manzana","Pera","Uva","Fresa"];

    const manejoCambios=(event)=>{
        const  nombre=event.target.name;
        const  valor=event.target.value;
        console.log(nombre+" "+valor);
        setEntradas(valores=>({...valores,[nombre]:valor}))
    }

    const manejoSumision=(event)=>{
        event.preventDefault();
        console.log("Enviando "+entradas.nombre+" "+entradas.edad +" "+entradas.auto);        
    }

 return(
    <div>
    <form onSubmit={manejoSumision}>
        <input name="nombre" value={entradas.nombre||" "} type="text" placeholder="Nombre"
        onChange={(evento)=>manejoCambios(evento)}></input>
        <input name="edad" type="number" value={entradas.edad||""} onChange={(evento)=>manejoCambios(evento)}></input>
        <input type="submit" value="Enviar"/>
        <select name="auto" value={entradas.auto||""} onChange={(evento)=>manejoCambios(evento)} >
           <option value="Ford">Ford</option>
           <option value="Chevrolet">Chevrolet</option>
           <option value="Toyota">Toyota</option>
            <option value="Nissan">Nissan</option>
        </select>
        <ul>
        {frutas.map((frut)=><Frutas fruta={frut}/>)} 
        </ul>

    </form>
    
    </div>
 )
}

export default Formulario;