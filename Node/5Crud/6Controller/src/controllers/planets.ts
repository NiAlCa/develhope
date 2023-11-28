// Definiciones de datos y controladores.
import { Request, Response } from "express";

/* 
Este archivo define los controladores para cada 
operación CRUD (Create, Read, Update, Delete) 
relacionada con los planetas. Cada controlador 
maneja una solicitud específica.



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

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "the planet was created" });
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  res.status(200).json({ msg: 'the planet was updated' });
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: 'the planet was deleted' });
};

export { getAll, getOne, create, updateById, deleteById };
/*
Cada controlador gestiona una operación diferente:

getAll: Devuelve todos los planetas.
getOne: Devuelve un planeta específico por ID.
create: Crea un nuevo planeta.
updateById: Actualiza un planeta por ID.
deleteById: Elimina un planeta por ID.


Los controladores simplifican el archivo de rutas y hacen que el código sea más modular y fácil de mantener. Además, separar la lógica de negocios de la definición de rutas facilita la realización de pruebas y la reutilización de código.
*/