# Proyecto Demo - Gestión de Entidades MVC

Este proyecto es una aplicación web sencilla desarrollada bajo el patrón arquitectónico **MVC (Modelo-Vista-Controlador)** para la gestión de tres tipos de entidades: **Personas**, **Autores** y **Localidades**.  
La aplicación permite crear nuevas entidades a través de un formulario y visualizar los datos existentes en un listado, interactuando con un backend RESTful que gestiona la lógica y persistencia.

---

## Arquitectura y Diseño

- **Modelo:**  
  El modelo está compuesto por varias clases Java que representan las entidades principales:  
  - `Persona`: con atributos como nombre, apellido, DNI y domicilio.  
  - `Autor`: con nombre, apellido y biografía.  
  - `Localidad`: con denominación.  
  Estas clases reflejan la estructura de la base de datos y contienen la lógica de negocio básica.

- **Vista:**  
  Las vistas están implementadas con HTML, CSS y JavaScript para presentar formularios y listados.  
  Los archivos clave son:  
  - `form.html`: formulario para creación de nuevas entidades.  
  - `list.html`: visualización y listado de entidades existentes.  
  - `css/estilos.css`: estilos comunes para una interfaz limpia y moderna.  
  - `js/form.js` y `js/list.js`: scripts que manejan la interacción con la API REST y la actualización dinámica del contenido.

- **Controlador:**  
  La capa controladora está implementada en el backend con Spring Boot, manejando las peticiones REST para CRUD (Crear, Leer, Actualizar, Eliminar) sobre las entidades. Se exponen endpoints para cada entidad, que el frontend consume para mostrar y enviar datos.

---

## Requisitos Previos

Para ejecutar el proyecto correctamente, se necesitan:

- **Java 11 o superior** con Spring Boot configurado.  
- **Base de datos MySQL** con una base llamada `db_personas`.  
- Configuración de conexión a la base de datos correctamente definida en `application.properties`.  
- El backend debe estar corriendo en `http://localhost:9000`.

---

## Endpoints API REST

La aplicación frontend consume los siguientes endpoints para operar con datos:

| Método | URL                          | Descripción                 |
|--------|------------------------------|-----------------------------|
| GET    | `/api/v1/personas`            | Obtener lista de personas   |
| POST   | `/api/v1/personas`            | Crear nueva persona         |
| GET    | `/api/v1/autores`             | Obtener lista de autores    |
| POST   | `/api/v1/autores`             | Crear nuevo autor           |
| GET    | `/api/v1/localidades`         | Obtener lista de localidades|
| POST   | `/api/v1/localidades`         | Crear nueva localidad       |

---

## Uso de la Aplicación

1. **Iniciar el backend** (Spring Boot) que expone la API REST y conecta con la base de datos `db_personas`.  
2. Abrir en el navegador la URL:  
   [http://localhost:9000/form.html](http://localhost:9000/form.html)  
   para acceder al formulario de creación de entidades.  
3. Completar los formularios para **Persona**, **Autor** o **Localidad** y enviar los datos.  
4. Usar el botón **"Ir a Listado"** para ver las entidades creadas.  
5. En la página de listado ([http://localhost:9000/list.html](http://localhost:9000/list.html)) se puede consultar todas las entidades y volver al formulario.

--

## Estructura del Proyecto

```plaintext
Proyecto-Demo/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       ├── config/                  # Configuración del proyecto
│   │   │       ├── controllers/             # Controladores REST
│   │   │       ├── entities/                # Entidades Java (Modelo)
│   │   │       │   └── audit/               # Clases para auditoría
│   │   │       ├── repositories/            # Repositorios de acceso a BD
│   │   │       └── services/                # Servicios (lógica de negocio)
│   │   └── resources/
│   │       ├── application.properties       # Configuración Spring Boot
│   │       ├── static/                       # Recursos estáticos (frontend)
│   │       │   ├── css/
│   │       │   │   └── estilos.css
│   │       │   ├── form.html
│   │       │   ├── list.html
│   │       │   └── js/
│   │       │       ├── form.js
│   │       │       └── list.js
│   │       └── templates/                    # Para vistas Thymeleaf (vacío o no usado)
├── build.gradle                             # Script de construcción Gradle
├── gradlew                                  # Wrapper para Linux/Mac
├── gradlew.bat                              # Wrapper para Windows
├── settings.gradle                          # Configuración Gradle
└── HELP.md                                  # Ayuda /documentación adicional

