// Importaciones y configuración inicial.
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOne, create, updateById, deleteById } from './controllers/planets';
/* 
 Configuración del Servidor y Rutas
Este archivo configura el servidor Express y define las rutas de 
la API, asignando a cada ruta un controlador específico
 importado desde controllers/planets.

*/
const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan("dev"));

// Definición de rutas y asignación de controladores.
app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOne);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);

// Iniciar el servidor.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
