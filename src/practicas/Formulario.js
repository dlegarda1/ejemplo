import React from "react";
import {useState} from "react";


function Frutas(props){
    console.log(props.fruta);
    console.log(props.indice);
    return(
    <li>Tipo de fruta {props.fruta}</li>
    )
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
        console.log("Enviando "+entradas.nombre+" "+entradas.edad +" "+entradas.auto+" "+entradas.fruta);        
    }

 return(
    <div>
    <form onSubmit={manejoSumision}>
         <input name="nombre" value={entradas.nombre||""} type="text" placeholder="Nombre"
        onChange={(evento)=>manejoCambios(evento)}></input>
        <input name="edad" type="number" value={entradas.edad||""} onChange={(evento)=>manejoCambios(evento)}></input>
        
        <select name="auto" value={entradas.auto||""} onChange={(evento)=>manejoCambios(evento)} >
           <option value="Ford">Ford</option>
           <option value="Chevrolet">Chevrolet</option>
           <option value="Toyota">Toyota</option>
            <option value="Nissan">Nissan</option>
        </select> 
        <input list="frutero" name="fruta" onChange={(evento)=>manejoCambios(evento)} value={entradas.fruta||""}/>
            <datalist id="frutero">
                {frutas.map((frut,index) => (
                    <option key={index} value={frut} />
                ))}
            </datalist>

        <button type="submit">Enviar</button>

    </form>
    
    </div>
 )
}

export default Formulario;