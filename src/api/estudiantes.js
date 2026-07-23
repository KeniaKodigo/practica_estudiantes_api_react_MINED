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

// metodo para registrar un estudiante
// el "objetoEstudiante" tiene que mandar un objeto con la info del estudiante (nombre, edad, correo)
export const saveStudent = async (objetoEstudiante) => {
    const respuesta = await axios.post("https://expressapiestudiantes-production.up.railway.app/api/estudiantes", objetoEstudiante)
    return respuesta.data
}

// METODO A UTILIZAR PARA LA TAREA
export const updateEmail = async (studentID, correo) => {
    const respuesta = await axios.patch(`https://expressapiestudiantes-production.up.railway.app/api/estudiantes/${studentID}`, correo)
    return respuesta.data
}

