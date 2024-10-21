import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create product route
router.post('/',ProductControllers.createProduct);

// Get all products route
router.get('/',ProductControllers.getAllProducts);


export const ProductRoutes = router