import { Router } from "express";
import { createOrderController } from "./order.controller";

const router = Router();

// route to create new order

router.post('/create', createOrderController);