import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
// import { orderRoutes } from "./modules/order/order.route";
// import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();

// Parser
app.use(express.json());

// Routes
app.use("/api/products", ProductRoutes);
// app.use('/api/order',orderRoutes)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
