import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const OrderConfirmation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Simulated API call to fetch product details
    const fetchProduct = async () => {
      // In a real application, you would fetch the product data from an API
      const dummyProduct: Product = {
        id: parseInt(id || '0'),
        name: 'Sample Product',
        price: 99.99,
        image: 'https://source.unsplash.com/random/300x300?product',
      };
      setProduct(dummyProduct);
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement order submission logic
    console.log('Order submitted:', { product, quantity, address });
    // Redirect to order complete page or show confirmation message
  };

  if (!product) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">${product.price.toFixed(2)}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">
                  Total: ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;