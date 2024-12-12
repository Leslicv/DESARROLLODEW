import React,{useState} from "react";
import usser from "./assets/imagenCuerpo/avatar-ejemplo.svg";


export default function Cuerpo(){

    const opciones=[
        {link:"/misfotos",img_url:"./assets/imagenCuerpo/ubicacion.svg",name: 'ubicacion'},
        {link:"/pics", img_url:"./assets/imagenCuerpo/archivo.svg", name: 'documentos'},
        {link:"/pics", img_url:"./assets/imagenCuerpo/emoji.svg", name: 'emoji' }];

        const[actualizacion,setActualizacion]=useState("");
        const[publicado,setPublicado]=useState(false);
        const[usuario,setUsuario]=useState(false);
        const[like,setlike]=useState(true);
        const[contador, setContador]=useState(0)
        const textoactualizado=(mensaje)=>{
                setActualizacion(mensaje.target.value); 
        };

        const infoPublicada=()=> {
            setPublicado(!publicado);
            setUsuario(!usuario);
            
        };

        const darLike=()=>{
            setlike(!like);

            setContador(like? contador+1 : contador-1)
        };
         



     return(
        <div className="pg-container-cuerpo">
            <section className="pg-cuerpo-mensaje">
                <div className="pg-mensaje" >
                    <img src={usuario} width='48px' height='48px' style={{borderRadius:"50%"}} alt="usuario" />
                    <textarea name="" id="" value={actualizacion} className="pg-cuerpo-textArea" onChange={textoactualizado}  disabled={publicado}></textarea>
                </div>
                <div className="pg-cuerpo-opciones-publicacion">
                    <div className="pg-cuerpo-opcion-imagen">
                        {opciones.map((opcion)=>(
                        <img src={opcion.img_url}  alt={opcion.name} title={opcion.name} className="pg-opcion-img"/>
                        ))}
                    </div>
                    <button className="pg-cuerpo-botton-publicar" onClick={infoPublicada} >Publicar</button>
                </div>
            </section>
            <section className={usuario? "pg-cuerpo-publicacion": "pg-cuerpo-publicacion-oculto"}> 
                    <div className="pg-cuerpo-aparece"> 
                        <img className="pg-cuerpo-imgUsuario" src={usser} width='32px' height='32px' style={{borderRadius:"50%"}} alt="" />
                        <div className="pg-cuerpo-datosUsuario">
                            <p className="pg-nombre">Lesli76344328</p>
                            <p className="pg-enlace" >@Lesli76344328</p>
                        </div>
                    </div>
                     <p className="pg-publicacion-actual"> 
                        {publicado ? actualizacion :""}
                    </p>
                    <div className="pg-publicacion-likes">
                        <img src= {like?"./assets/imagenCuerpo/me-gusta-blue.svg":"./assets/imagenCuerpo/me-gusta.svg" } alt="like" onClick={darLike} />
                        <p onClick={darLike}>{like? "Me gusta":"No me gusta"}</p>
                        <p >{contador}</p>

                    </div>
            </section>
        </div>
     );
}