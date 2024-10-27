import express, { Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { PORT } from "./shared/constants/env";
import { swaggerSpec } from "./config/swagger";

const app = express();
const port = PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a hello world message
 *     responses:
 *       200:
 *         description: Hello World
 */
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Returns a pong message
 *     responses:
 *       200:
 *         description: Pong
 */
app.get("/ping", (_req: Request, res: Response) => {
  console.log("Someone pinged here");
  res.send("pong");
});

// Function to start the server
export const startServer = () => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(
      `Swagger documentation available at http://localhost:${port}/api-docs`
    );
  });
};

export default app;

// Starts the server only if executed directly
if (require.main === module) {
  startServer();
}
