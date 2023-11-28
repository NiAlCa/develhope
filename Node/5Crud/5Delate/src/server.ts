import express, { Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";

/*

El método DELETE en tu servidor Express se utiliza para eliminar
 un recurso, en este caso, un planeta de tu arreglo planets. 
 Vamos a revisar cómo está implementado este método en tu código:


*/

const app = express();
const port = 3000;
app.use(express.json());

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

app.get("/api/planets", (req: Request, res: Response) => {
  res.status(200).json(planets);
});

app.get("/api/planets:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id == Number(id));
  res.status(200).json(planet);
});

app.post("/api/planets", (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  res.status(201).json({ msg: "the planet was created" });
});

app.put("/api/planets/:id", (req, res) =>{
    const {id} = req.params 
    const {name} = req.body 
    planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p) 
    res.status(200).json({msg: 'the planet was updated'});
     
})

/* 
Extracción del ID:

La ruta es /api/planets/:id. El :id en la URL es un parámetro que Express proporciona en el objeto req.params.
Este id se utiliza para identificar qué planeta se quiere eliminar.
Eliminación del Planeta:

Se usa Array.prototype.filter para crear un nuevo arreglo excluyendo el planeta con el id especificado.
p.id !== Number(id) asegura que solo los planetas cuyo id no coincide con el proporcionado se mantengan en el nuevo arreglo.
Respuesta:

Una vez que el planeta ha sido eliminado del arreglo, se envía una respuesta al cliente con un estado 200 (OK) y un mensaje indicando que la eliminación fue exitosa.

*/

app.delete("/api/planets/:id", (req, res) =>{
  const {id} = req.params
  planets = planets.filter(p => p.id !== Number(id))
  res.status(200).json({msg: 'the planet was deleted'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
/* 

Persistencia de Datos: Al igual que con las operaciones POST y PUT, este ejemplo 
modifica un arreglo en memoria. En una aplicación real, probablemente se interactuaría con 
una base de datos para la persistencia de datos.

Manejo de Errores: Si el id proporcionado no existe, podrías querer manejar este caso enviando 
una respuesta diferente, como un código de estado 404 Not Found.
Confirmación de la Eliminación: En escenarios reales, a veces es útil confirmar si el elemento
 a eliminar existía antes de intentar eliminarlo, y responder en consecuencia.
Este patrón de eliminación es común en APIs RESTful, donde DELETE se utiliza para quitar recursos. 
Es importante destacar que, en una API bien diseñada, una vez que se elimina un recurso,
 generalmente no se puede recuperar. Por lo tanto, se deben implementar las medidas necesarias para confirmar y validar estas operaciones antes de ejecutarlas.

*/