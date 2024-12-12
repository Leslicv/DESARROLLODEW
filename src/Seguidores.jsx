import React, { useState } from "react";



export default function Seguidores(){
    const[seguido,setSeguido]=useState(false);
    const[botonseguir,setBotonSeguir]=useState(seguido? "Seguido":"Seguir");
   
    const seguidor=()=>{
        setSeguido(!seguido)
    };

    const estadoBoton=(indice)=>{ 
        
        setBotonSeguir((estado)=>estado[indice]==="Seguir"? "Seguido": "Seguir");
    };

    const lista=[
        { name: "Lesli", enlace: "Lesli", botton: false, img:"https://unavatar.io/a"}, 
        { name: "Fox", enlace: "kiko-nickname",botton: false, img:"https://unavatar.io/f" }
        // { name: "Lulu", enlace: "lulu-nickname",botton:"Seguir" , img:"https://unavatar.io/c"},
        // { name: "Choco", enlace: "choco-nickname",botton:"Seguir",img:"https://unavatar.io/d"},
        // { name: "Rosi", enlace: "rosi-nickname", botton:"Seguir",img:"https://unavatar.io/e"},
        // { name: "Tito", enlace: "tito-nickname", botton:"Seguir",img:"https://unavatar.io/x"}
    ];

    
        return(
        <div className="pg-container-seguidores">
                <div className="pg-informacion-seguidor">{
                lista.map((nombre,i)=>(
                <div key={i} className="pg-seguidor">
                    <img className="pg-img-seguidor" src={nombre.img} alt="1" width="48px" height='48px' style={{borderRadius: "50%"}}/>
                    <div className="pg-usuario">
                        <strong className="pg-usuario">{nombre.name}</strong>
                        <p className="pg-url">@{nombre.enlace}</p>
                    </div>
                    <div className="pg-botton">
                        <button className="pg-boton-seguir" onClick={estadoBoton[i]} >
                            {botonseguir}
                        </button>
                    </div>
                </div>

                ))}
                </div>
        </div>
        )
}