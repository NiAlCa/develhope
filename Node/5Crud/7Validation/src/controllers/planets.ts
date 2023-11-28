
import { Request, Response } from "express";
import Joi from "joi";



/* 
La validación de datos es crucial en aplicaciones web para asegurar que los datos entrantes (como los recibidos en las solicitudes POST y PUT) cumplan con los requisitos y formatos esperados. Esto ayuda a prevenir errores y vulnerabilidades de seguridad.

*/

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOne = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id == Number(id));
  res.status(200).json(planet);
};


/* 
Validar los Datos de Entrada en la Ruta create:
En la ruta create, antes de añadir el nuevo planeta a la lista, 
utilizas el esquema planetSchema para validar los datos recibidos
 en el cuerpo de la solicitud.

*/

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validateNewPlanet = planetSchema.validate(newPlanet)

  if (validateNewPlanet.error){
    return res.status(400).json({msg : validateNewPlanet.error})

  }else{

  }
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "the planet was created" });
};

/*
Aquí, planetSchema.validate(newPlanet) verifica si newPlanet cumple
 con el esquema definido. Si los datos no son válidos, validateNewPlanet.error 
 será verdadero y la función devolverá un error 400 (Bad Request)
  con el mensaje de error.

*/

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  res.status(200).json({ msg: 'the planet was updated' });
};


/* 
Después, defines un esquema de validación para los planetas usando Joi.object().
 Este esquema especifica que cada planeta debe tener un id que es un número
  entero y un name que es una cadena de texto. Ambos campos son obligatorios.

*/
const planetSchema = Joi.object({

  id: Joi.number().integer().required(),
  name: Joi.string().required(),
})

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: 'the planet was deleted' });
};

export { getAll, getOne, create, updateById, deleteById };


/* 
Beneficios de la Validación de Datos

Seguridad: Evita la inyección de datos maliciosos.

Consistencia de Datos: Asegura que los datos cumplen con el formato esperado.

Mejor Experiencia del Usuario: Proporciona retroalimentación útil cuando los datos de entrada son incorrectos.

Menos Errores en el Backend: Previene el procesamiento de datos erróneos o mal formados.


*/