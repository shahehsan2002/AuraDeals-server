import express from "express";

const router = express.Router();

// Create product route
router.post('/',ProductControllers.createProduct);