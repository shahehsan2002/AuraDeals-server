import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create product route
router.post('/',ProductControllers.createProduct);


export const ProductRoutes = router