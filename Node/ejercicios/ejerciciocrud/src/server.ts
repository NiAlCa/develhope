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




app.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg:'Hello world!'});
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


