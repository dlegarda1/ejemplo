import React from "react";

function Futbol(){

    const anotacion=(valor,evento)=>{
        console.log(valor+" "+evento.type);
    };

    return(
        <button
            onClick={(evento)=>anotacion("Gool",evento)}
        >Dispara
        </button>
    )
}

export default Futbol;