# 📌 Práctica 6 - API REST con Express y MongoDB

## 📖 Descripción
Esta guía tiene como objetivo que el estudiante aprenda a crear una API REST básica utilizando Express y MongoDB. Se incluyen los pasos necesarios para configurar el entorno, definir rutas y conectarse a la base de datos.

## 🎯 Objetivos
- Crear una API REST básica utilizando Express y MongoDB.

## 🛠 Requisitos Previos
- Tener instalado [Node.js](https://nodejs.org/)
- Tener instalado [MongoDB](https://www.mongodb.com/) o acceso a una base de datos en la nube (MongoDB Atlas)
- Tener instalado [Git](https://git-scm.com/)

## 🚀 Instalación y Ejecución
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/diegocabezas004/practica6.git
   cd practica6
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno creando un archivo `.env` en la raíz del proyecto:
   ```sh
   MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
   PORT=3000
   ```
4. Ejecutar la aplicación:
   ```sh
   npm start
   ```
5. Probar la API con Postman o en el navegador:
   ```sh
   http://localhost:3000
   ```

## 🔗 Endpoints Actuales
| Método | Endpoint          | Descripción                  |
|---------|------------------|------------------------------|
| POST    | `/api/users/register` | Registra un nuevo usuario |

## 🤝 Contribuciones
Si deseas contribuir, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu función o mejora (`git checkout -b feature-nueva`).
3. Realiza un commit de tus cambios (`git commit -m 'Agregada nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature-nueva`).
5. Abre un Pull Request en GitHub.

## 📜 Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

📧 **Contacto**: Si tienes dudas o sugerencias, puedes abrir un issue en el repositorio o contactarme a través de GitHub.

