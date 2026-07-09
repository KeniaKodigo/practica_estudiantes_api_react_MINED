
export default function RegistroEstudiante() {
    return (
        <section className="pagina">
            <section className="contenido contenido--angosto">        
                <h1 className="titulo">Registrar Nuevo Estudiante</h1>
                <p className="subtitulo">Completa la información para dar de alta al estudiante.</p>
        
                <form className="tarjeta-formulario">
                    <div className="seccion">
                        <span className="seccion__icono" aria-hidden="true">🧑‍🎓</span>
                        <h2 className="seccion__titulo">Datos del Estudiante</h2>
                    </div>
                    <hr className="separador" />
        
                    <div className="campo">
                        <label htmlFor="nombre" className="etiqueta">Nombre Completo <span className="requerido">*</span></label>
                        <input id="nombre" type="text" className="entrada" placeholder="Ej. Juan Pérez" />
                        <span className="ayuda">Ingresa el nombre tal como figura en el documento oficial.</span>
                    </div>
        
                    <div className="fila">
                        <div className="campo">
                            <label htmlFor="edad" className="etiqueta">Edad <span className="requerido">*</span></label>
                            <input id="edad" type="number" className="entrada" placeholder="00" />
                        </div>
            
                        <div className="campo">
                            <label htmlFor="correo" className="etiqueta">
                                Correo Electrónico <span className="requerido">*</span>
                            </label>
                            <input id="correo" type="email" className="entrada" placeholder="estudiante@ejemplo.com" />
                        </div>
                    </div>
            
                    <hr className="separador" />
        
                    <div className="acciones">
                        <button type="submit" className="boton boton--primario">
                            <span aria-hidden="true">💾</span> Guardar Estudiante
                        </button>
                        <button type="button" className="boton boton--secundario">Cancelar</button>
                    </div>
                </form>
            </section>
        </section>
    )
}
