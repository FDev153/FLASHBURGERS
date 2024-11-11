# Proyecto Integrado - FlashBurger

Este proyecto es una aplicación desarrollada en React como parte de un proyecto de prácticas. 
A continuación, se detallan las instrucciones para instalar y configurar el proyecto en un entorno local.

## Requisitos previos

Para poder ejecutar esta aplicación, necesitarás tener instalado:
- [Node.js](https://nodejs.org/) (incluye `npm`)
- XAMPP

## Instalación

Sigue estos pasos para instalar el proyecto:

1. **Instalación de Dependencias de React:**

En la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias
- npm install

2. **Configuración de la Base de Datos:**

Inicia XAMPP y asegúrate de que los servicios Apache y MySQL están activados.
Accede a phpMyAdmin en http://localhost/phpmyadmin para crear la base de datos que necesita el proyecto.
Importa el archivo de script SQL (flashburger.sql que esta en la carpeta data) en phpMyAdmin para configurar la base de datos con las tablas necesarias.

3. **Configuración de las Funciones PHP**

Abre el archivo funcion.php dentro de la carpeta funcionesPHP y verifica que los valores de conexión coincidan con tu configuración local de MySQL
Modifica los valores según sea necesario:
- define("SERVIDOR_BD", "localhost");
- define("USUARIO_BD", "root");
- define("CLAVE_BD", "1234");
- define("NOMBRE_BD", "flashburger");
  
Mueve la carpeta funcionesPHP dentro de la carpeta htdocs de XAMPP. La ruta final debería ser algo como C:\xampp\htdocs\funcionesPHP.
Configura la ruta de acceso a las funciones PHP en el archivo datos.js que encontraras en la carpeta conf. Asegúrate de que la URL de las funciones PHP apunte al servidor local de XAMPP.

4. **Ejecutar el Proyecto:**
Una vez que hayas configurado la base de datos, las funciones PHP y las dependencias, vuelve a la raíz del proyecto y ejecuta el siguiente comando para iniciar la aplicación:
- npm start
