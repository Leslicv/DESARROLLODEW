import React from "react";

export default function Presentacion(){
  const menu=["Inicio","Testimonios","Blog","Nosotros"];
    return(
        <div> titulo
            <img src="" alt="" />
            <div>
                <ul>{
                    menu.map((elemento,indice)=>{
                        <li style={{color:"gray"}}>{elemento.index}</li>
                    })}
                    
                </ul>
            </div>
        </div>
    )
}