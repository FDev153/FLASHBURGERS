-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-flashburger.alwaysdata.net
-- Generation Time: Dec 18, 2024 at 09:18 PM
-- Server version: 10.11.9-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flashburger_bd`
--
CREATE DATABASE IF NOT EXISTS `flashburger_bd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `flashburger_bd`;

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`, `img`) VALUES
(1, 'Entrantes', 'nuggets.png'),
(2, 'Hamburgesas', 'hamburguesa.png'),
(3, 'Bebidas', 'soda.png'),
(4, 'Postres', 'pastel.png'),
(5, 'Salsas', 'salsas.png');

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL,
  `id_tipo_empleado` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id_ingrediente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `ingredientes`
--

INSERT INTO `ingredientes` (`id_ingrediente`, `nombre`) VALUES
(1, 'Croquetas de Jamón'),
(2, 'Huevo'),
(3, 'Lechuga'),
(4, 'Pechuga de pollo'),
(5, 'queso'),
(6, 'Salsa cesar'),
(7, 'Calamares'),
(8, 'Mayonesa'),
(9, 'Mayonesa veggi'),
(10, 'Hamburguesa de Angus madurada'),
(11, 'Hamburguesa Vegana '),
(12, 'Tomate'),
(13, 'Lechuga'),
(14, 'Pan Hamburguesa Brioche'),
(15, 'Pan Hamburguesa integral'),
(16, 'cebolla'),
(17, 'Rucula'),
(18, 'Aguacate'),
(19, 'Salsa BBQ'),
(20, 'Aros de cebolla'),
(21, 'Queso cheddar'),
(22, 'Chocolate negro'),
(23, 'Chocolate blanco'),
(24, 'Mantequilla'),
(25, 'Azucar'),
(26, 'Harina de trigo'),
(27, 'queso crema'),
(28, 'nata para montar'),
(29, 'Esencia de vainilla'),
(30, 'Tortillas de maíz '),
(31, 'frijoles negros'),
(32, 'jalapeños'),
(33, 'crema agria'),
(34, 'Rollitos de Primavera'),
(35, 'tocino'),
(36, 'Filete de salmón'),
(37, 'cafe'),
(38, 'bizcocho'),
(39, 'crema de mascarpone'),
(40, 'cacao en polvo'),
(41, 'Salsa Brava'),
(42, 'Ali oli'),
(43, 'Patatas bravas');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `precio` float NOT NULL,
  `estado` enum('En curso','Listo','Terminado') NOT NULL DEFAULT 'En curso',
  `takeaway` enum('0','1') NOT NULL DEFAULT '0',
  `direccion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `nombre`, `telefono`, `precio`, `estado`, `takeaway`, `direccion`) VALUES
(128, 'fer', '666666666', 13.5, 'Terminado', '0', ''),
(129, 'F', '443898434', 501, 'Terminado', '0', ''),
(130, 'asdas', '123123123', 1062.5, 'Terminado', '0', ''),
(131, 'r2r323', '123123123', 9, 'Terminado', '0', ''),
(132, 'asd', '123123123', 9, 'Listo', '0', ''),
(133, 'ffewrerer', '312342311', 9, 'Listo', '0', ''),
(134, 'fewef', '123123123', 9, 'Listo', '0', ''),
(135, 'wefwfew', '123123211', 9, 'Listo', '0', ''),
(136, 'asdas', '123123123', 9, 'En curso', '0', ''),
(137, 'asdasdasdas', '666666666', 25.5, 'Terminado', '1', 'calle ceuta 19'),
(138, 'fernad', '616738534', 18, 'Terminado', '1', 'Fernan Gonzalez'),
(139, 'asdasdasdasd', '123456788', 10.49, 'En curso', '0', ''),
(140, 'asdasdasdasd', '728828282', 7.5, 'En curso', '0', ''),
(141, 'PRUEBA', '123123123', 6, 'Listo', '1', 'Inventado'),
(142, 'CROQUETAS', '123123123', 25.5, 'En curso', '0', ''),
(143, 'Fewr', '234234234', 8.5, 'En curso', '1', 'Calle patrocinio 3'),
(144, 'asdasd', '213423423', 9, 'En curso', '1', 'Direccion inventada'),
(145, 'sdasd', '623223843', 8.5, 'En curso', '1', 'Calle patrocinio 3'),
(146, 'asdas', '232313212', 8.5, 'En curso', '0', ''),
(147, 'asdasd', '123123123', 8.5, 'En curso', '0', ''),
(148, 'fernando', '623221313', 19.5, 'En curso', '0', ''),
(149, 'fer', '123123123', 25, 'En curso', '0', ''),
(150, 'fernando', '123123123', 17.5, 'En curso', '1', 'Direccion inventada'),
(151, 'fer', '123123123', 20.5, 'En curso', '1', 'Direccion inventada'),
(152, 'fer', '123123123', 20.5, 'En curso', '1', 'Calle patrocinio 3'),
(153, 'Fer', '623221231', 20.5, 'En curso', '0', ''),
(154, 'fer', '123123123', 20.5, 'En curso', '0', ''),
(155, 'fer', '123123112', 20.5, 'En curso', '1', 'Direccion inventada');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos_productos`
--

CREATE TABLE `pedidos_productos` (
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `pedidos_productos`
--

INSERT INTO `pedidos_productos` (`id_pedido`, `id_producto`, `cantidad`) VALUES
(128, 1, 1),
(128, 13, 2),
(129, 13, 200),
(129, 25, 1),
(130, 1, 125),
(131, 2, 1),
(132, 2, 1),
(133, 2, 1),
(134, 2, 1),
(135, 2, 1),
(136, 2, 1),
(137, 1, 3),
(138, 2, 2),
(139, 16, 1),
(139, 17, 1),
(139, 18, 1),
(139, 31, 1),
(139, 32, 1),
(140, 13, 3),
(141, 16, 1),
(141, 17, 1),
(141, 18, 1),
(142, 1, 3),
(143, 1, 1),
(144, 2, 1),
(145, 1, 1),
(146, 1, 1),
(147, 1, 1),
(148, 2, 1),
(148, 3, 1),
(149, 5, 1),
(149, 6, 1),
(150, 1, 1),
(150, 2, 1),
(151, 1, 1),
(151, 4, 1),
(152, 1, 1),
(152, 4, 1),
(153, 1, 1),
(153, 4, 1),
(154, 1, 1),
(154, 4, 1),
(155, 1, 1),
(155, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` float NOT NULL,
  `imagen` varchar(20) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `imagen`, `id_categoria`) VALUES
(1, 'Croquetas de Jamón', 'Deliciosas croquetas caseras rellenas de jamón ibérico, acompañadas de una salsa de alioli casero.', 8.5, 'croquetas.jpg', 1),
(2, 'Ensalada César', 'Mezcla de lechugas frescas, crujientes trozos de pan tostado, pollo a la parrilla, queso parmesano rallado y aderezo César.', 9, 'cesar.jpg', 1),
(3, 'Calamares a la Romana', 'Anillos de calamar tiernos y crujientes, rebozados y fritos a la perfección, servidos con limón y mayonesa.', 10.5, 'calamares.jpg', 1),
(4, 'Hamburguesa Clásica', 'Jugosa hamburguesa de carne de res angus, con queso cheddar derretido, lechuga fresca, tomate, cebolla y salsa de la casa, todo en un pan brioche.', 12, 'hamburgesaclasic.jpg', 2),
(5, 'Hamburguesa Vegetariana', 'Hamburguesa vegetariana a base de garbanzos y espinacas, acompañada de aguacate, rúcula, tomate y mayonesa vegana en un pan integral.', 11.5, 'hamburgesaveggi.jpg', 2),
(6, 'Hamburguesa BBQ', 'Hamburguesa de carne de cerdo ahumada, bañada en salsa BBQ casera, con aros de cebolla crujientes y queso cheddar, servida en un pan de sésamo.', 13.5, 'hamburgesabbq.jpg', 2),
(10, 'Tarta de Chocolate Suprema', 'Generosa porción de tarta de chocolate negro, adornada con virutas de chocolate blanco y acompañada de una bola de helado de vainilla.', 7.5, 'tartachoco.jpg', 4),
(11, 'Cheesecake de Frutos Rojos', 'Delicioso cheesecake cremoso con una base de galletas trituradas, cubierto con una mezcla de frutos rojos frescos y salsa de frambuesa.', 8, 'cheesecake.jpg', 4),
(12, 'Crème Brûlée', 'Clásico postre francés de crema batida con una capa de azúcar caramelizado en la parte superior, servido con frutas frescas.', 6.5, 'creme.jpg', 4),
(13, 'Cerveza Estrella Galicia', '', 2.5, 'estrella.jpg', 3),
(14, 'Coca Cola', '', 2.5, 'cocacola.jpg', 3),
(15, 'Fanta limon', '', 2.5, 'fantalimon.jpg', 3),
(16, 'Salsa de Queso Azul', 'Deliciosa salsa cremosa a base de queso azul, ideal para acompañar carnes y patatas.', 2, 'salsa1.jpg', 5),
(17, 'Salsa de Chipotle', 'Salsa picante ahumada con chiles chipotle, perfecta para añadir un toque de calor a tus platos.', 2, 'salsa2.jpg', 5),
(18, 'Salsa de Yogur', 'Salsa suave de yogur griego con un toque de limón y hierbas frescas.', 2, 'salsa3.jpg', 5),
(19, 'Patatas Bravas', 'Patatas cortadas en cubos y fritas, servidas con salsa brava y alioli.', 7.99, 'patatas.jpg', 1),
(20, 'Nachos Supremos', 'Tortillas de maíz crujientes cubiertas con queso derretido, frijoles negros, jalapeños, salsa de tomate, guacamole y crema agria.', 10.99, 'nachos.jpg', 1),
(21, 'Rollitos de Primavera', 'Rollitos rellenos de vegetales frescos y carne de pollo, servidos con salsa agridulce.', 8.99, 'rollitos.jpg', 1),
(22, 'Hamburguesa de Pollo BBQ', 'Pechuga de pollo a la parrilla con salsa BBQ, queso cheddar, cebolla caramelizada y tocino crujiente.', 11.99, 'burgerpollo.jpg', 2),
(23, 'Hamburguesa de Salmón', 'Filete de salmón a la parrilla con mayonesa de eneldo, rúcula, tomate y cebolla roja en un panecillo de trigo integral.', 12, 'burgersalmon.jpg', 2),
(24, 'Hamburguesa Vegana', 'Hamburguesa vegana a base de garbanzos, lentejas y verduras, servida con aguacate, tomate, lechuga y mayonesa vegana.', 9.99, 'burgervegana.jpg', 2),
(25, 'Agua mineral', '', 1, 'agua.jpg', 3),
(26, 'Te helado', '', 2, 'te.jpg', 3),
(27, 'Zumo melocoton', '', 2.25, 'zumo.jpg', 3),
(28, 'Tiramisu', 'Postre italiano clásico hecho con capas de bizcocho de café empapado, crema de mascarpone y cacao en polvo.', 5.99, 'tiramisu.jpg', 4),
(29, 'Mousse de Chocolate', 'Mousse de chocolate suave y cremoso, adornado con virutas de chocolate.', 4.99, 'mousse.jpg', 4),
(30, 'Tarta de Manzana', 'Tarta de manzana casera con una base de hojaldre y relleno de manzanas caramelizadas.', 5.99, 'tartamanzana.jpg', 4),
(31, 'Salsa de Mostaza y Miel', '', 2.5, 'salsamostaza.jpg', 5),
(32, 'Salsa cheddar', '', 1.99, 'cheddar.jpg', 5),
(33, 'Salsa BBQ', '', 1.99, 'barbacoa.jpg', 5);

-- --------------------------------------------------------

--
-- Table structure for table `producto_ingrediente`
--

CREATE TABLE `producto_ingrediente` (
  `id_ingrediente` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Dumping data for table `producto_ingrediente`
--

INSERT INTO `producto_ingrediente` (`id_ingrediente`, `id_producto`) VALUES
(1, 1),
(2, 10),
(3, 2),
(4, 2),
(4, 22),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 5),
(10, 4),
(10, 6),
(11, 5),
(11, 24),
(12, 4),
(12, 5),
(13, 4),
(14, 4),
(14, 22),
(14, 23),
(15, 5),
(15, 24),
(16, 4),
(17, 5),
(17, 23),
(18, 20),
(19, 6),
(19, 22),
(20, 6),
(21, 4),
(21, 6),
(22, 10),
(23, 10),
(25, 10),
(25, 11),
(25, 29),
(25, 30),
(26, 10),
(27, 11),
(29, 10),
(31, 20),
(32, 20),
(34, 21),
(35, 20),
(36, 23),
(37, 28),
(38, 28),
(40, 28),
(40, 29),
(41, 19),
(42, 19),
(43, 19);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_empleado`
--

CREATE TABLE `tipo_empleado` (
  `id_tipo_empleado` int(11) NOT NULL,
  `tipo_empleado` enum('Cocinero','Encargado de pedidos','Repartidor') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleado`,`id_tipo_empleado`),
  ADD KEY `id_tipo_empleado` (`id_tipo_empleado`);

--
-- Indexes for table `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id_ingrediente`);

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indexes for table `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  ADD PRIMARY KEY (`id_pedido`,`id_producto`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`,`id_categoria`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indexes for table `producto_ingrediente`
--
ALTER TABLE `producto_ingrediente`
  ADD PRIMARY KEY (`id_ingrediente`,`id_producto`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indexes for table `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  ADD PRIMARY KEY (`id_tipo_empleado`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id_ingrediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  MODIFY `id_tipo_empleado` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`id_tipo_empleado`) REFERENCES `tipo_empleado` (`id_tipo_empleado`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  ADD CONSTRAINT `pedidos_productos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedidos_productos_ibfk_3` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `producto_ingrediente`
--
ALTER TABLE `producto_ingrediente`
  ADD CONSTRAINT `producto_ingrediente_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `producto_ingrediente_ibfk_2` FOREIGN KEY (`id_ingrediente`) REFERENCES `ingredientes` (`id_ingrediente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
