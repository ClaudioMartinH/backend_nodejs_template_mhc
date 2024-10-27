import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/ping", (_req: Request, res: Response) => {
  console.log("Someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
