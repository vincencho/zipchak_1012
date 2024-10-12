import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderComplete: React.FC = () => {
  // In a real application, you would fetch the order details from the server or local storage
  const orderDetails = {
    orderNumber: '12345',
    totalAmount: 99.99,
    estimatedDelivery: '2024-03-25',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <CheckCircle size={64} className="mx-auto text-green-500" />
          <h1 className="text-2xl font-bold mt-4">Order Complete!</h1>
          <p className="text-gray-600">Thank you for your purchase.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <p><strong>Order Number:</strong> {orderDetails.orderNumber}</p>
          <p><strong>Total Amount:</strong> ${orderDetails.totalAmount.toFixed(2)}</p>
          <p><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</p>
        </div>
        <div className="text-center">
          <Link
            to="/product-list"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;