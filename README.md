# Proyecto de Venta de Páginas Web

Este proyecto implementa una plataforma para la venta de páginas web personalizadas, orientado a facilitar la conexión entre clientes interesados y servicios de desarrollo web. Construido con Node.js, el proyecto incluye características de gestión de clientes y usuarios, utilizando tecnologías clave como Express, MySQL y EJS para garantizar una experiencia funcional y atractiva.

---

## **Índice**
- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Colaboradores](#colaboradores)

---

## **Introducción**
En la era digital, contar con una página web efectiva y funcional es fundamental para cualquier negocio. Este proyecto busca proporcionar una solución accesible y profesional para crear páginas web que permitan a los negocios captar clientes, mostrar su portafolio y facilitar la interacción con sus usuarios.

El objetivo principal es ofrecer un entorno fácil de usar tanto para clientes como administradores, integrando funcionalidades modernas para gestionar solicitudes y usuarios de manera eficiente.

---

## **Características**
- **Gestión de Clientes**: 
  - Registro, listado, edición y eliminación de clientes.
  - Paginación para un manejo eficiente de los registros.
- **Autenticación**: 
  - Sistema de inicio de sesión con contraseñas encriptadas.
  - Manejo seguro de sesiones.
- **Formularios Dinámicos**:
  - Recopilación de datos clave a través de formularios interactivos.
- **Panel de Administración**:
  - Gestión de usuarios y administración centralizada.

---

## **Tecnologías Utilizadas**
### Backend:
- **Node.js** con **Express**: Framework para el manejo de rutas y lógica de negocio.
- **MySQL**: Base de datos relacional para almacenar clientes y usuarios.
- **Express-myconnection**: Middleware para gestionar conexiones a la base de datos.
- **EJS**: Motor de plantillas para vistas dinámicas.
- **bcrypt**: Para la encriptación de contraseñas.

### Frontend:
- **HTML5** y **CSS3**: Diseño y estructura de las páginas.
- **JavaScript**: Para interactividad en el cliente.

### Herramientas de Desarrollo:
- **Nodemon**: Reinicio automático del servidor en desarrollo.
- **Morgan**: Registro de solicitudes HTTP.

---

## **Requisitos Previos**
- Node.js (versión 16 o superior)
- MySQL instalado y configurado
- npm (incluido con Node.js)

---

## **Instalación**
1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/anzlotte/PaginasWEB_FSG6.git
   cd PaginasWEB_FSG6

---   

2. **Instala las dependencias**:
   ```bash
   npm install

---

3. **Configura la base de datos**:
   - Crea una base de datos llamada **paginasweb**
   - Importa el esquema desde el archivo SQL correspondiente.

---

4. **Ejecuta el proyecto**:
   ```bash
   npm run dev

---

5. **Accede a la Aplicación**
- **Disponible en**: [http://localhost:3000/Home](http://localhost:3000/Home)

---

## **Uso**
### Rutas Principales:
- `/`: Página de inicio con listado de clientes.
- `/home`: Gestión de clientes.
- `/login`: Acceso de administradores.
- `/admon`: Panel administrativo.

### Flujo General:
- **Registra nuevos usuarios y clientes**: A través de formularios interactivos.
- **Gestiona los datos**: Utilizando un panel administrativo sencillo y funcional.

---

## **Estructura del Proyecto**
```plaintext
src/
├── controllers/
│   └── clientesControllers.js               # Lógica principal para clientes y usuarios
├── routes/
│   └── clientes.js                          # Rutas del servidor
├── views/
│   ├── administrador/                       # Plantillas EJS para administración
│   │    └── inicioSesion.ejs                # Página HTML inicio de sesión.
│   │    ├── admonUsuarios.ejs               # Página HTML administración de usuarios.
│   ├── cliente.ejs                          # Página HTML home pantalla principal.
│   ├── editar_cliente.ejs                   # Página HTML para modificación información clientes.
│   └── usuario                              # Página HTML de inicio con listado de clientes
├── app.js                                   # Archivo principal de la aplicación
├── public/                                  # Archivos estáticos (CSS, JS, imágenes)

```
---

## **Colaboradores**
- Andrés Lote
- Jorge Morales
- Steven Aguirre
- Amparo Fortaleché
- Mónica Méndez

### Supervisión por:
- **Julián Felipe Latorre**
- **Roymer Romero**

Este **README.md** está diseñado para proporcionar toda la información necesaria sobre el proyecto en un solo archivo, desde su propósito hasta su implementación y uso.


