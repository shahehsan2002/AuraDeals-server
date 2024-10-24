// import { model, Schema } from "mongoose";
// import { TProduct } from "./product.interface";

// const productSchema = new Schema<TProduct>({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   stockQuantity: {
//     type: Number,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   images: {
//     type: [String],
//     required: true,
//   },
//   slug: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     required: true,
//   },
//   updatedAt: { 
//     type: Date, 
//     required: true
//  },
// });

// export const product = model<TProduct>(
//   "Product",
//   productSchema,
// //   "products",
// //   {}
// );


// import mongoose, { Schema, Document } from 'mongoose';
import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  name: { 
    type: String,
     required: true 
    },
  description: {
     type: String, 
     required: true 
    },
  price: {
     type: Number,
      required: true
     },
  stockQuantity: {
     type: Number,
      required: true 
    },
  category: {
     type: String,
      required: true
     },
  images: { 
    type: [String], 
    required: true
   },
  slug: {
     type: String, 
     required: true,
      unique: true },
  createdAt: {
     type: Date,
      required: true
    },
  updatedAt: { type: Date,
     required: true
    }
});

// export const product = model<TProduct & Document>('Product', productSchema);
export const product = model<TProduct>(
  "Product",
  productSchema,
  "products",
  {}
);