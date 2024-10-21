import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// Create a new product
const createProduct = async (req: Request, res: Response) => {
const productData = req.body;
const result = await ProductServices.createProduct(productData);
res.json({
    success: true,
    message: "Product is created successfully !",
    data: result,
});
}

// Get all products

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Products are fetched successfully !",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products!",
            error: err,
        });
    }
}

// get product by id

const getProductById = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getProductById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Product is fetched successfully !",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch product!",
            error: err,
        });
    }
}


export const ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById
}