-- Crear base de datos
CREATE DATABASE PaginasWeb;

--Usar la base de datos creada
use PaginasWeb;

-- Crear tabla 

CREATE TABLE Clientes(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono INT,
    comentarios VARCHAR(200) NOT NULL
);

-- ver todas las tablas
SHOW TABLES;

-- Descripcion de las tablas
describe Clientes;