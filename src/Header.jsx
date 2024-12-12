import React from "react";
import logo from "./assets/imagenHeader/logo.svg";
import usuario from "./assets/imagenCuerpo/avatar-ejemplo.svg";

export default function Registro(){

    const arreglo=[{nombre:"./assets/imagenHeader/ayuda.svg", titulo:"Centro de ayuda"},{nombre:"./assets/imagenHeader/ajustes.svg", titulo:"Ajustes"}]
        return(
            <section className="pg-container-header"> 
                <header className="pg-header">
                    <div className="pg-header-pagina">
                        <p className="logo-header">AZLO FACIL</p>
                        <input className="pg-header-input" type="text" placeholder="Que te interesa"/>
                    </div>
                    <div className="pg-header-usuario">
                        <div className="pg-header-detalle-usuario">
                            {arreglo.map((imagen)=>( 
                                <img src={imagen.nombre} alt={imagen.titulo}  title={imagen.titulo} className="pg-header-detalle-opciones"/>
                            ))}
                        </div>
                        <img src={usuario} alt="usuario"  width='48px' height='48px'/>
                        <p>Usuario</p>
                        
                    </div>     
                </header>
            </section>
        )


}