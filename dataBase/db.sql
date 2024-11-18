-- Crear base de datos
CREATE DATABASE IF NOT EXISTS PaginasWeb;

-- Usar la base de datos creada
USE PaginasWeb;

-- --------------------------------------------------------

-- Estructura de tabla para la tabla `clientes`
CREATE TABLE `clientes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(200) NOT NULL UNIQUE,  -- Correo debe ser único
  `telefono` VARCHAR(20) NOT NULL,
  `comentarios` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`)  -- Hacer id la clave primaria
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

-- Estructura de tabla para la tabla `usuarios`
CREATE TABLE `usuarios` (
  `email` VARCHAR(100) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`email`)  -- Hacer email la clave primaria
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------


