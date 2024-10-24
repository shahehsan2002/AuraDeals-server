// import { TProduct } from "./product.interface";
// import { product } from "./product.model";

// // Create a new product
// const createProduct = async (payload: TProduct) => {
//   const result = await product.create(payload);
//   return result;
// };

// // Get all products
// const getAllProducts = async () => {
//   const result = await product.find();
//   return result;
// };

// // Get product by id
// const getProductById = async (id: string) => {
//   const result = await product.findById(id);
//   return result;
// };

// // Update product
// const updateProduct = async (id: string, payload: TProduct) => {
//   const result = await product.findByIdAndUpdate(id, payload, { new: true });
//   return result;
// };

// // Delete product
// const deleteProduct = async (id: string) => {
//   const result = await product.findByIdAndDelete(id);
//   return result;
// };

// export const ProductServices = {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct
// };

import { TProduct } from "./product.interface";
import { product } from "./product.model";

// Create a new product
const createProduct = async (payload: TProduct) => {
  const result = await product.create(payload);
  return result;
};

// Get all products
const getAllProducts = async () => {
  const result = await product.find();
  return result;
};

// Get product by id
const getProductById = async (id: string) => {
  const result = await product.findById(id);
  return result;
};

// Update product
const updateProduct = async (id: string, payload: TProduct) => {
  const result = await product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// Delete product
const deleteProduct = async (id: string) => {
  const result = await product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
