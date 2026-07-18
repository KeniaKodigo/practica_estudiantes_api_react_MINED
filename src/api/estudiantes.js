// en este js vamos a consumir la api de estudiantes de express (la que creamos en clase)

import axios from "axios";

// creando el metodo obtener estudiantes
export const obtenerEstudiantes = async () => {

    // url/endpoint de tu API, SINO le especificamos la peticion HTTP el piensa que es un GET
    // https://expressapiestudiantes-production.up.railway.app/api/estudiantes
    const respuesta = await fetch("http://localhost:3000/estudiantes");
    // la respuesta la especificamos .json
    const dataEstudiantes = await respuesta.json() //[arreglo de los estudiantes]
    return dataEstudiantes
}

// metodo para obtener estudiantes CON AXIOS
export const getStudents = async () => {
    const respuesta = await axios.get("https://expressapiestudiantes-production.up.railway.app/api/estudiantes")
    return respuesta.data
}

// metodo para obtener un estudiante por su ID
export const getStudentById = async (studentID) => {
    const respuesta = await axios.get(`https://expressapiestudiantes-production.up.railway.app/api/estudiantes/${studentID}`)
    return respuesta.data
}