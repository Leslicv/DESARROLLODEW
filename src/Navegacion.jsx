import React  from "react";


export default function Navegacion(){
    const enlaces=["Inicio",'Gestion de tareas','Mensajes','Perfil',"Mas"];
    const imagenes=["./assets/Inicio.svg","./assets/Notificacion.svg","./assets/messages.svg","./assets/Profile.svg","./assets/Notificacion.svg"];

  
    return(
        <div className="pg-navegacion">

            <ul className="enlaces-navegacion" >  {enlaces.map((enlace, index)=>
                ( 
                <li className="enlace"
                    key={index}>
                        <img src={imagenes[index]} alt="" width="15px" height='15px'></img>
                        {enlace}
                </li>
            ))}</ul>
        </div>
    );
}

