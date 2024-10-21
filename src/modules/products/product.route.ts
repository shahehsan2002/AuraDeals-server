import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create product route
router.post('/',ProductControllers.createProduct);

// Get all products route
router.get('/',ProductControllers.getAllProducts);

// Get product by id route
router.get('/:id',ProductControllers.getProductById);

// update product route
router.put('/:id',ProductControllers.updateProduct);

// delete product route
// router.delete('/:id',ProductControllers.deleteProduct);


export const ProductRoutes = router