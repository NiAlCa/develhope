

import express, { Request, Response } from 'express';
import "express-async-errors"
import morgan from "morgan";



/* 
En el contexto de una API REST (Representational State Transfer),
 una solicitud GET se utiliza para recuperar datos de un servidor.
  Es uno de los métodos de solicitud HTTP más comunes y se caracteriza
   por ser seguro y sin efectos secundarios, lo que significa que no modifica
    los datos en el servidor. Las solicitudes GET son usadas generalmente para
     obtener recursos o datos, y la información solicitada se transmite a través de la URL


*/



const app = express();
const port = 3000;



app.use(morgan("dev"))
//Estas líneas inician el servidor Express y configuran el middleware morgan para el registro de solicitudes.

//Definición de Tipos y Datos de Planeta:

type Planet = {
    id: number;
    name: string;
}

type Planets = Planet[];



let planets = [
    { id:1, name: "Earth"},
    { id:2, name: "Mars"},
];


//Aquí definimos un tipo Planet y una lista planets. Esto es parte del modelo de datos de tu API.




//Ruta GET para Obtener Todos los Planetas:


app.get('/api/planets', (req: Request, res: Response) => {
    res.status(200).json(planets);
});

/* 
Esta ruta permite a los clientes obtener una lista 
de todos los planetas disponibles. Cuando se realiza 
una solicitud GET a /api/planets, se devuelve el array 
planets como respuesta en formato JSON

*/




//Ruta GET para Obtener un Planeta Específico:

app.get('/api/planets:id', (req: Request, res: Response) => {
    const {id} = req.params;
    const planet = planets.find(p => p.id == Number(id))
    res.status(200).json(planet);
});

/*
Esta ruta permite obtener un planeta específico por su ID. Aquí, req.params.
id captura el ID del planeta que se pasa en la URL (como /api/planets/1 para la Tierra).
Importante: Parece que hay un error en la ruta. Debería ser /api/planets/:id
 (con un / antes de :id) para que la ruta capture correctamente el parámetro id.*/



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});