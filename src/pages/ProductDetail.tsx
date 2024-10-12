import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  description: string;
  endDate: string;
  participants: number;
  minParticipants: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Simulating API call to fetch product details
    setTimeout(() => {
      const dummyProduct: Product = {
        id: parseInt(id || '0'),
        name: 'Smart 4K TV',
        images: [
          'https://source.unsplash.com/random/800x600?tv',
          'https://source.unsplash.com/random/800x600?television',
          'https://source.unsplash.com/random/800x600?smart-tv',
        ],
        price: 499.99,
        description: 'Experience crystal-clear picture quality with this 55-inch 4K Smart TV. Featuring HDR technology and a wide color gamut, this TV brings your favorite shows and movies to life. With built-in streaming apps and voice control, entertainment is just a command away.',
        endDate: '2024-04-30T23:59:59',
        participants: 15,
        minParticipants: 20,
      };
      setProduct(dummyProduct);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const timeLeft = new Date(product.endDate).getTime() - new Date().getTime();
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <img src={product.images[currentImage]} alt={product.name} className="w-full h-96 object-cover" />
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center mt-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Group Buy Status</h2>
              <p className="mb-1">Time Left: {daysLeft}d {hoursLeft}h</p>
              <p className="mb-1">Participants: {product.participants}/{product.minParticipants}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(product.participants / product.minParticipants) * 100}%` }}
                ></div>
              </div>
            </div>
            <Link
              to={`/order-confirmation/${product.id}`}
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <ShoppingCart size={20} className="mr-2" />
              Join Group Buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;