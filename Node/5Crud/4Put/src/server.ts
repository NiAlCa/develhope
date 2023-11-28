import express, { Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";


//Vamos a analizar y explicar cómo funciona el método PUT en tu servidor Express. Este método se utiliza comúnmente para actualizar recursos existentes en un servidor.

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

app.put("/api/planets/:id", (req, res) => {
  // Extrae el 'id' de los parámetros de la URL.
  const { id } = req.params;

  // Extrae el 'name' del cuerpo de la solicitud.
  const { name } = req.body;

  // Actualiza el nombre del planeta con el 'id' especificado.
  // Si el planeta existe, actualiza su nombre; de lo contrario, deja el planeta como está.
  planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p);

  // Envía una respuesta indicando que la actualización fue exitosa.
  res.status(200).json({ msg: 'the planet was updated' });
});


/* 
1.Ruta y Parámetros:
La ruta es /api/planets/:id. El :id es un parámetro de ruta q
ue Express extrae y pone a disposición en req.params.
Cuando se realiza una solicitud PUT a esta ruta (por ejemplo, /api/planets/2), 
Express captura el id de la URL.

2.Manejo de la Solicitud:
Dentro del manejador, se obtiene id de req.params. Este valor se usa
 para identificar cuál planeta se va a actualizar.
También se obtiene name del cuerpo de la solicitud (req.body). 
Este es el nuevo nombre que se asignará al planeta.

3.Actualización del Planeta:
Se utiliza Array.prototype.map para crear un nuevo arreglo de planetas.
Si el id del planeta en el arreglo coincide con el id de la URL, se crea una nueva 
instancia del planeta con el nuevo nombre. De lo contrario, se deja el planeta como está.
Es importante convertir id a número ya que los parámetros de ruta son siempre cadenas de 
texto (String), y aquí los id de los planetas están almacenados como números (Number).

4.Respuesta:
Una vez que se ha actualizado el arreglo de planetas, se envía una respuesta
 al cliente con un estado 200 (OK) y un mensaje indicando que la actualización fue exitosa.

*/


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



/*
En aplicaciones reales, la actualización de datos normalmente implicaría interactuar con una base de datos.
 Aquí se está modificando un arreglo en memoria, lo cual está bien para propósitos de demostración, 
 pero en una aplicación de producción, se usaría alguna forma de almacenamiento persistente.
La respuesta HTTP 200 OK indica que la solicitud ha sido procesada con éxito. Otra opción común para 
una actualización exitosa es 204 No Content, que indica que la solicitud fue exitosa pero no hay contenido 
para devolver en la respuesta.
Este código asume que el id proporcionado siempre corresponde a un planeta existente. En un caso real,
 se debería manejar la situación donde el id no corresponda a ningún planeta, posiblemente devolviendo un estado 404 Not Found.






*/