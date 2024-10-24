// import { Request, Response } from "express";
// import { ProductServices } from "./product.service";

// // Create a new product
// const createProduct = async (req: Request, res: Response) => {
// const productData = req.body;
// const result = await ProductServices.createProduct(productData);
// res.json({
//     success: true,
//     message: "Product is created successfully !",
//     data: result,
// });
// }

// // Get all products

// const getAllProducts = async (req: Request, res: Response) => {
//     try {
//         const result = await ProductServices.getAllProducts();
//         res.status(200).json({
//             success: true,
//             message: "Products are fetched successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch products!",
//             error: err,
//         });
//     }
// }

// // get product by id

// const getProductById = async (req: Request, res: Response) => {
//     try {
//         const result = await ProductServices.getProductById(req.params.id);
//         res.status(200).json({
//             success: true,
//             message: "Product is fetched successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch product!",
//             error: err,
//         });
//     }
// }

// // update product

// const updateProduct = async (req: Request, res: Response) => {
//     try {
//         const result = await ProductServices.updateProduct(
//             req.params.id,
//             req.body
//         );
//         res.status(200).json({ 
//             success: true,
//             message: "Product is updated successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not update product!",
//             error: err,
//         });
//     }
// }

// // delete product

// const deleteProduct = async (req: Request, res: Response) => {
//     try {
//         const result = await ProductServices.deleteProduct(req.params.id);
//         res.status(200).json({
//             success: true,
//             message: "Product is deleted successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not delete product!",
//             error: err,
//         });
//     }
// }

// export const ProductControllers = {
//     createProduct,
//     getAllProducts,
//     getProductById,
//     updateProduct,
//     deleteProduct
// }

import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// Create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);
    res.json({
      success: true,
      message: "Product is created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not create product!",
      error: err,
    });
  }
};

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products are fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products!",
      error: err,
    });
  }
};

// Get product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product is fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product!",
      error: err,
    });
  }
};

// Update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.updateProduct(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Product is updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update product!",
      error: err,
    });
  }
};

// Delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.deleteProduct(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete product!",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
