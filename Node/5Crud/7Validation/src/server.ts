// Importaciones y configuración inicial.
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOne, create, updateById, deleteById } from './controllers/planets';

const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan("dev"));


app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOne);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
