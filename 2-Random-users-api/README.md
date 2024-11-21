# Ejercicio: Fetch de Usuarios de Random User API con React y TypeScript
https://randomuser.me/documentation#howto

## Objetivos a cubrir/practicar/aprender:
- Practicar/Aprender a fetchear datos de una API.
- Usar TypeScript.
- Poner en práctica un código limpio de React.
- Aprender a hacer paginación.
- Aprender a hacer filtrado de datos.
- Entender el concepto de Separation of Concerns.

## Proyecto:
Vamos a construir una SPA (Single Page Application) que mostrará un listado de usuarios obtenidos de la Random User API.

### Requerimientos:
- **Información en cada Card**: Nombre y apellido, email, y foto del usuario.
- **Interacción con cada Card**: Al presionar, debe redirigir a un detalle del usuario o mostrar más información.
- **Paginación o Infinite Scrolling**: Al final de la página, obtener más usuarios.

### Opcional:
- **Filtro por nombre**: Al escribir en un campo de texto, debe filtrar usuarios por nombre o apellido.

## Road Map

### 1. Obtener datos de usuarios de la API
- **Endpoint a usar**: `https://randomuser.me/api/?page=1&results=10`

#### Parámetros útiles:
- `page`: Indica el número de página.
- `results`: Define cuántos usuarios devolver por llamada.

Crear una función en un archivo aparte para manejar las solicitudes a la API. Esta función debe ser reutilizable.

### 2. Definir los Tipos (TypeScript)
- Analizar el JSON que devuelve la API y crear una interfaz o tipo para tipar correctamente los datos.
- Incluir propiedades necesarias como `Nombre completo`, `email`, `Foto/Avatar`.

### 3. Crear el componente para el listado de usuarios
- Este componente mostrará las tarjetas de los usuarios.

### 4. Crear el componente para la Card de usuario
- Representa un usuario individual, mostrando su nombre, email y foto.
- Crear su debida interfaz (si es que se le pasan props al componente)

### 5. Implementar la paginación
- Usar la propiedad `page` de la API para cargar más usuarios conforme sea necesario.
- Crear un estado para manejar la página actual y actualizarlo.

### 6. Agregar el filtrado de usuarios (Lo dejo como opcional por si lo queres hacer solo)
- Implementar un campo de búsqueda para filtrar usuarios por nombre.
- Optimizar con debounce si es necesario.

## CONCEPTO IMPORTANTISIMO y HERMOOOOSO DE REACTJS ~
Separation of concerns -> Que cada componente/funcionalidad se encargue de una cosa y la haga bien.
Regla que me gusta seguir: Si un componente tiene mas de 300/400 lineas de código probablemente deba dividirse en subcomponentes. 
(si no tiene más de 200 MEJOR QUE MEJOR :D, más hermoso todo)

Por ejemplo:
-> Componente Listado de usuarios -> filtrado de usuarios, paginación, etc.
-> Componente Card -> Funcionalidad para navegar a la pagina de un usuario.