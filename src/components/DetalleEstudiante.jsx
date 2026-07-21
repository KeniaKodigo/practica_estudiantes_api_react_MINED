// import React from 'react'

import { useEffect, useState } from "react"
import { getStudentById } from "../api/estudiantes"
import { useParams } from "react-router"

export default function DetalleEstudiante() {
    // creando el estado donde se va guardar la informacion del estudiante
    const [estudiante, setEstudiante] = useState({})
    // capturando el id del estudiante que viene del parametro de la ruta
    const { estudianteId } = useParams();
    console.log(estudianteId)

    // metodo para obtener al estudiante
    const obtenerDetalleEstudiante = async () => {
        // el estudianteId viene del useParams
        const respuesta = await  getStudentById(estudianteId)
        // actualizando el estado con la informacion del estudiante encontrado
        setEstudiante(respuesta)
    }

    useEffect(() => {
        obtenerDetalleEstudiante()
    }, [])
    console.log(estudiante)

    return (
        <section className="pagina">
            <section className="contenido contenido--angosto"> 
                <h1 className="titulo">Detalle del estudiante</h1>
                <section>
                    <p>ID del estudiante: {estudiante.id}</p>
                    <p>Nombre: {estudiante.nombre}</p>
                    <p>Edad: {estudiante.edad}</p>
                    <p>Correo: {estudiante.correo}</p>
                </section>
            </section>
        </section>
    )
}
