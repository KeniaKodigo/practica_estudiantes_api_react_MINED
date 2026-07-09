# Práctica API Estudiantes (React + Express)

Proyecto educativo para practicar el consumo de una API REST desde React. La idea no es construir algo perfecto, sino repasar los conceptos base del desarrollo frontend moderno: **peticiones HTTP, rutas, props, estado y validación de formularios.**

## 🎯 Objetivos de aprendizaje

Con este proyecto vas a practicar:

- **Consumo de una API REST** con `fetch` (GET, POST, PATCH) desde React.
- **Rutas de la aplicación** (React Router) para navegar entre pantallas: listado, detalle, creación y edición.
- **Props y estado** (`useState`, `useEffect`, `props`) para pasar y manejar datos entre componentes.
- **Validación de formularios** en JavaScript puro (sin librerías externas) antes de enviar los datos al backend.
- **Manejo de estados de UI**: carga (loading), error y vacío (sin datos).

## 🧩 Arquitectura general

```
┌─────────────────┐        HTTP (fetch)        ┌──────────────────┐
│  React (frontend)│  ────────────────────────▶ │  Express (backend)│
│  Vite + JS        │  ◀──────────────────────── │  API Estudiantes   │
└─────────────────┘         JSON                └──────────────────┘
```

El frontend (este proyecto) **no tiene su propia base de datos ni lógica de negocio**: todo lo que ves en pantalla viene de consumir la API de estudiantes ya construida en Express.

## 🔌 API que consume el proyecto

Backend ya en producción, con las siguientes rutas:

| Método | Ruta                        | Acción                              | Dónde se usa en el front               |
|--------|-----------------------------|--------------------------------------|------------------------------------------|
| GET    | `/estudiantes`               | Obtener todos los estudiantes        | Pantalla de **Listado**                  |
| GET    | `/estudiantes/:estudianteId` | Obtener un estudiante por ID         | Pantalla de **Detalle**                  |
| POST   | `/estudiantes`               | Crear un nuevo estudiante            | Pantalla de **Registrar Estudiante**     |
| PATCH  | `/estudiantes/:estudianteId` | Actualizar el correo de un estudiante| Modal/pantalla de **Editar correo**      |

### Modelo de datos

```json
{
  "id": 1,
  "nombre": "Ana García",
  "edad": 18,
  "correo": "ana.garcia@email.com"
}
```

> ⚠️ El backend solo permite actualizar el **correo** vía `PATCH`, no el nombre ni la edad. Por eso el formulario de edición del proyecto solo tiene ese campo.

## 🗂️ Estructura del proyecto

```
src/
├── assets/
│   └── css/
│       ├── estilos-globales.css   # Variables de color, tipografía, etc.
│       ├── Navbar.css
│       └── ListaEstudiantes.css
├── components/
│   ├── Navbar.jsx                 # Barra superior de navegación
│   └── ListaEstudiantes.jsx       # Tabla con el listado de estudiantes
├── App.jsx
└── main.jsx
```

A medida que avancemos, se van a ir sumando:

```
├── pages/
│   ├── ListaEstudiantes.jsx       # GET /estudiantes
│   ├── DetalleEstudiante.jsx      # GET /estudiantes/:id
│   ├── RegistrarEstudiante.jsx    # POST /estudiantes
│   └── EditarCorreo.jsx           # PATCH /estudiantes/:id
├── services/
│   └── estudiantesApi.js          # Funciones que hacen los fetch a la API
└── router/
    └── AppRouter.jsx              # Configuración de React Router
```

## 🚀 Cómo correr el proyecto

### 1. Backend (Express)

```bash
cd api-estudiantes
npm install
npm run dev
```

Por defecto debería quedar corriendo en algo como `http://localhost:3000`.

### 2. Frontend (React + Vite)

```bash
cd practica_api_estudiantes_react
npm install
npm run dev
```

Corre en `http://localhost:5173` (puerto por defecto de Vite).

> 💡 Si el backend corre en otro puerto/dominio, vas a necesitar configurar CORS en Express o usar el proxy de Vite (`vite.config.js`) para evitar errores de CORS al hacer `fetch`.

## 📡 Consumiendo la API desde React

La idea es centralizar las llamadas a la API en un solo lugar (por ejemplo `src/services/estudiantesApi.js`) en vez de escribir `fetch` directamente dentro de cada componente. Esto facilita reutilizar el código y cambiar la URL base en un solo sitio.

Ejemplo de la forma esperada (a completar por el estudiante):

```javascript
const API_URL = 'http://localhost:3000/estudiantes';

export async function obtenerEstudiantes() {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) throw new Error('Error al obtener estudiantes');
  return respuesta.json();
}

export async function crearEstudiante(datosEstudiante) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datosEstudiante),
  });
  if (!respuesta.ok) throw new Error('Error al crear estudiante');
  return respuesta.json();
}
```

Estas funciones luego se consumen dentro de los componentes usando `useEffect` (para cargar datos al montar la pantalla) y `useState` (para guardar el resultado, el estado de carga y los posibles errores).

## ✅ Validación de formularios

El formulario de **Registrar Estudiante** debe validar, antes de hacer el `POST`:

- **Nombre**: obligatorio, no vacío, longitud mínima razonable (ej. 3 caracteres).
- **Edad**: obligatorio, número positivo, dentro de un rango lógico (ej. entre 15 y 99).
- **Correo**: obligatorio, con formato de correo válido (se puede usar una expresión regular simple o el propio `type="email"` del input como primer filtro).

La validación se hace en JavaScript puro, mostrando mensajes de error debajo de cada campo y evitando el `submit` si algo no es válido. No se envía nada a la API hasta que el formulario esté correcto.

El formulario de **Editar correo** valida únicamente el formato del correo.

## 🖥️ Pantallas del proyecto

1. **Listado de estudiantes** — consume `GET /estudiantes`, muestra tabla, buscador y botón para ir al formulario de registro.
2. **Detalle de estudiante** — consume `GET /estudiantes/:id`, muestra los datos y el botón para editar el correo.
3. **Registrar estudiante** — formulario validado que consume `POST /estudiantes`.
4. **Editar correo** — formulario de un solo campo que consume `PATCH /estudiantes/:id`.

## 🛠️ Tecnologías

- **React** (Vite)
- **CSS puro** (sin librerías de UI, para practicar estilos desde cero)
- **React Router** para el manejo de rutas
- **Fetch API** para el consumo del backend
- **Express** (backend, en otro repositorio) para la API de estudiantes

## 📌 Estado del proyecto

- [x] Diseño de pantallas (Listado y Registro)
- [ ] Configurar React Router
- [ ] Conectar Listado con `GET /estudiantes`
- [ ] Pantalla de Detalle con `GET /estudiantes/:id`
- [ ] Formulario de Registro con validación + `POST /estudiantes`
- [ ] Edición de correo con validación + `PATCH /estudiantes/:id`
- [ ] Manejo de estados de carga y error