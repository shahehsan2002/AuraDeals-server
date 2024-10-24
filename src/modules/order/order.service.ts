// import Product from "../products/product.model";  // Corrected import for Product model
import orderModel from "./order.model";

// Assuming `initialPayment` is a service function that handles the payment session creation
import { initiatePayment } from "../payment/payment.utils";  // Import your payment service here

const createOrder = async (orderData: any) => {
    const { user, Products } = orderData;

    let totalPrice = 0;

    // Calculate total price and get product details
    const productDetails = await Promise.all(
        Products.map(async (item: any) => {
            const product = await product.findById(item.productId);  // Assuming Product is the correct model name
            if (product) {
                totalPrice += product.price * item.quantity;
                return {
                    productId: item.productId,
                    quantity: item.quantity
                };
            } else {
                throw new Error('Product not found');
            }
        })
    );

    const transactionId = `Txn_${Date.now()}`;

    // Create new order
    const order = new orderModel({
        user,
        products: productDetails,
        totalPrice,
        paymentStatus: "pending",
        transactionId
    });

    await order.save();

    const paymentData = {
        transactionId,
        totalPrice,
        customerName: user.name,
        customerEmail: user.email,
        customerPhone: user.phone,
        customerAddress: user.address
    };

    // Call to the payment service for initiating payment
    const paymentSession = await initiatePayment(paymentData);
    
    if (!paymentSession) {
        throw new Error('Payment session creation failed');
    }

    console.log(paymentSession);

    return paymentSession;
};

export const orderService = {
    createOrder
};
