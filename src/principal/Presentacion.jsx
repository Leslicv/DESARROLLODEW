import React from "react";

export default function Presentacion(){
  const menu=["Inicio","Testimonios","Blog","Nosotros"];
  const actividades=['Acerca de Cibertec','Testimonios','Blog' ]
  const fTitulo=['Contacto'];
  const fTestimonios=['Historias reales','Opiniones'];
  const fBlog=['Actividades extra-académicas','Voluntariados','Voluntariados'];
    return(
        <div className="pg-body">
            <div className="pg-header-principal">
                <div className="pg-header-logo">
                    <h2>Bienvenido a</h2>
                    <h1>AZLAFACIL</h1>
                    <img src="./assets/imagenPrincipal/imagen-principal.png" alt="AZLO FACIL" />
                </div>
                <nav className="pg-menu-principal cuadrado">
                    <ul className="pg-enlaces">{
                        menu.map((elemento,indice)=>(
                            <li key={indice}>{elemento}</li>
                        ))}
                        
                    </ul>
                </nav>
            </div>
            <section className="pg-section section1">
                <div>
                        <h2 className="pg-section-subtitulo">QUE OFRECE AZLAFACIL?</h2>
                        <p>
                        Le brindamos todos los datos, reseñas y perspectivas en un solo lugar para que su búsqueda sea lo más sencilla posible.</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </section> 
            <section className="pg-section section2">
                
                <div>
                    <h2 className="pg-section-subtitulo">TESTIMONIO REAL</h2>
                    <p>
                    Le brindamos todos los datos, reseñas y perspectivas en un solo lugar para que su búsqueda sea lo más sencilla posible.</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="pg-section-ondas">
                    <img src="./assets/imagenPrincipal/waves.svg" alt="" />
                </div>
            </section> 
            <div className="pg-section-actividades">
                <div className="pg-section-actividades-listas">
                    <ul>{actividades.map((actividad,index)=>(
                        <li className="pg-actividad-list" key={index}>
                            <div className="pg-actividad-elementos">
                                <div className="pg-actividad-point"></div>
                                <li>{actividad}</li>
                            </div>
                        </li>
                    ))}</ul>
                </div>
            </div>
            <footer className="pg-footer">
                <div className="pg-footer-divisiones">
                    <div className="pg-footer-sub">
                        <h4>AZLAFACIL</h4>
                        <ul>{fTitulo.map((elemento1, index)=>(
                            <li key={index}>{elemento1}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pg-footer-sub">
                            <h4>TESTIMONIO</h4>
                        <ul>{fTestimonios.map((elemento2, index)=>(
                            <li key={index}>{elemento2}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pg-footer-sub">
                        <h4>BLOG</h4>
                        <ul>{fBlog.map((elemento3, index)=>(
                            <li key={index}>
                                {elemento3}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </footer>
        </div>
    )
}