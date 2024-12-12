import React, { useState } from "react";

export default function CuerpoGestorTareas(){
    const [tarea, setTarea]=useState("");
    const[tarearegistrada,setTareaRegistrada]=useState("")
    const[tareapublicada, setTareapublicada]=useState([])
    const tareaingresada=(text)=>{
        setTarea(text.target.value);
    }

    const tareavisible=()=>{
        setTareaRegistrada(tarea)
        setTarea(" ");
    }
    const tareapublic=()=>{
        setTareapublicada([...tareapublicada,tarea]);
        setTarea(" ");
    }


    return(
        <div className="pg-container-cuerpo">
            <div>
                <h2>Registre tarea pendiente </h2>
                <input type="text" onChange={tareaingresada}/>
                    <p >{tarea}</p>  
                    <button onClick={tareapublic}>Registrar</button>              
                <ul >
                    {tareapublicada.map((tarea,index)=>
                     <li key={index}>{tarea} 
                     <button>Borrar</button>
                     </li>

                     
                    ) }
                    
                </ul>
            </div>
        </div>
    )
}