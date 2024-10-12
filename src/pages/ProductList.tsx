import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    // Simulating API call to fetch products
    setTimeout(() => {
      const dummyProducts: Product[] = [
        { id: 1, name: 'Smart TV', image: 'https://source.unsplash.com/random/300x300?tv', price: 499.99, category: 'Electronics' },
        { id: 2, name: 'Wireless Earbuds', image: 'https://source.unsplash.com/random/300x300?earbuds', price: 79.99, category: 'Electronics' },
        { id: 3, name: 'Coffee Maker', image: 'https://source.unsplash.com/random/300x300?coffee-maker', price: 39.99, category: 'Home & Garden' },
        { id: 4, name: 'Fitness Tracker', image: 'https://source.unsplash.com/random/300x300?fitness-tracker', price: 49.99, category: 'Electronics' },
        { id: 5, name: 'Yoga Mat', image: 'https://source.unsplash.com/random/300x300?yoga-mat', price: 29.99, category: 'Sports' },
        { id: 6, name: 'Blender', image: 'https://source.unsplash.com/random/300x300?blender', price: 59.99, category: 'Home & Garden' },
      ];
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = products
    .filter(product => filter === '' || product.category.toLowerCase() === filter.toLowerCase())
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <label htmlFor="filter" className="mr-2">Filter by Category:</label>
          <select
            id="filter"
            className="border rounded-md px-2 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Garden">Home & Garden</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        <div className="w-full md:w-auto">
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select
            id="sort"
            className="border rounded-md px-2 py-1"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/product-detail/${product.id}`} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;