
import { Request, Response } from "express";

export const createOrderController = async (req:Request, res:Response) => {
    try{
        const orderData = req.body;
        const newOrder = await orderService.createOrder(orderData);
        res.status(201).json({
            success:true,
            message:"Order is created successfully !",
            data:newOrder
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:(error as Error).message,
            error
        })
    }
}