import express, { Request, Response } from 'express';
import "express-async-errors"
import morgan from "morgan";


const app = express();
const port = 3000;

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

  
  app.use(express.json());
app.use(morgan("dev"))






app.get("/api/planets", (req: Request, res: Response) => {
  res.status(200).json(planets);
})


app.get("/api/planets:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const planet = planets.find((p) => p.id == Number(id));
  res.status(200).json(planet);
})

app.post("/api/planets", (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  res.status(201).json({ msg: "the planet was created" });
});

app.put("/api/planets/:id", (req: Request, res: Response) =>{
  const {id} = req.params 
  const {name} = req.body 
  planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p) 
  res.status(200).json({msg: 'the planet was updated'});
   
})

app.delete("/api/planets/:id", (req: Request, res: Response) =>{
  const {id} = req.params
  planets = planets.filter(p => p.id !== Number(id))
  res.status(200).json({msg: 'the planet was deleted'});
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


