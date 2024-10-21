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

export const ProductServices = {
  createProduct,
  getAllProducts,
};
