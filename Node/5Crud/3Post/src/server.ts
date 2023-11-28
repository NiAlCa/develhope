import express, { Request, Response } from 'express';
import "express-async-errors";
import morgan from "morgan";

/*
El método HTTP POST se utiliza generalmente en APIs REST para crear nuevos recursos.
 En el contexto de tu API, se utiliza para agregar un nuevo Planet a la lista de planets.
  Cuando se recibe una solicitud POST, el servidor procesa los datos incluidos en el cuerpo 
  de la solicitud (req.body) y, basándose en estos datos, crea un nuevo recurso. En este caso, un nuevo objeto Planet es creado y añadido a la lista existente de planetas.

Esta forma de gestionar las solicitudes POST es fundamental para permitir que los usuarios 
interactúen con la API de manera que puedan añadir sus propios datos al conjunto de datos del 
servidor. La inclusión de express.json() como middleware es crucial aquí, ya que permite que 
el servidor analice correctamente los cuerpos de las solicitudes en formato JSON, que es 
el formato comúnmente utilizado para enviar datos en APIs REST.


*/

const app = express();
const port = 3000;

// Utiliza express.json() para analizar cuerpos de solicitudes en formato JSON.
// Esto es necesario para poder leer los datos JSON enviados en las solicitudes POST.
app.use(express.json());

// Morgan es un middleware para registrar las solicitudes entrantes, útil para depuración y desarrollo.
app.use(morgan("dev"));


type Planet = {
    id: number;
    name: string;
};

type Planets = Planet[];

let planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
];

app.get('/api/planets', (req: Request, res: Response) => {
    res.status(200).json(planets);
});


app.get('/api/planets/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    res.status(200).json(planet);
});

// Ruta POST para crear un nuevo planeta.
// Esta ruta permite a los usuarios agregar nuevos planetas a la lista.
app.post('/api/planets', (req: Request, res: Response) => {
    // Extrae el id y el nombre del cuerpo de la solicitud POST.
    const { id, name } = req.body;

    // Crea un nuevo objeto planeta usando los datos proporcionados.
    const newPlanet = { id, name };

    // Agrega el nuevo planeta al array de planetas.
    planets = [...planets, newPlanet];
    
    // Envía una respuesta con código de estado 201, indicando que un recurso fue creado exitosamente.
    res.status(201).json({ msg: "The planet was created" });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
