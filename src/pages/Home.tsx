import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLocation, setCurrentLocation] = useState('송도 센트럴파크');

  const banners = [
    { id: 1, image: 'https://source.unsplash.com/random/1200x400?home', title: '함께 절약하세요.', subtitle: '우리 "집" 에 착한 제안' },
    { id: 2, image: 'https://source.unsplash.com/random/1200x400?apartment', title: '함께 절약하세요.', subtitle: '우리 "아파트" 에 착한 제안' },
    { id: 3, image: 'https://source.unsplash.com/random/1200x400?office', title: '함께 절약하세요.', subtitle: '우리 "빌딩/회사" 에 착한 제안' },
    { id: 4, image: 'https://source.unsplash.com/random/1200x400?school', title: '함께 절약하세요.', subtitle: '우리 "학교" 에 착한 제안' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const popularProducts = [
    { id: 1, name: '스마트 TV', image: 'https://source.unsplash.com/random/300x300?tv', location: '송도 센트럴파크' },
    { id: 2, name: '무선 이어버드', image: 'https://source.unsplash.com/random/300x300?earbuds', location: '송도 센트럴파크' },
    { id: 3, name: '커피 메이커', image: 'https://source.unsplash.com/random/300x300?coffee-maker', location: '송도 센트럴파크' },
    { id: 4, name: '피트니스 트래커', image: 'https://source.unsplash.com/random/300x300?fitness-tracker', location: '송도 센트럴파크' },
    { id: 5, name: '식빵', image: 'https://source.unsplash.com/random/300x300?bread', location: '송도 센트럴파크' },
    { id: 6, name: '우유', image: 'https://source.unsplash.com/random/300x300?milk', location: '송도 센트럴파크' },
    { id: 7, name: '샐러드', image: 'https://source.unsplash.com/random/300x300?salad', location: '송도 센트럴파크' },
    { id: 8, name: '도시락', image: 'https://source.unsplash.com/random/300x300?lunchbox', location: '송도 센트럴파크' },
  ];

  const categories = [
    { id: 1, name: '전자기기', icon: '🖥️' },
    { id: 2, name: '홈 & 가든', icon: '🏡' },
    { id: 3, name: '패션', icon: '👚' },
    { id: 4, name: '뷰티', icon: '💄' },
    { id: 5, name: '식품', icon: '🍽️' },
    { id: 6, name: '도서', icon: '📚' },
    { id: 7, name: '골프', icon: '⛳' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 배너 슬라이더 */}
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-lg h-96">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h2 className="text-white text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="text-white text-2xl">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 인기 상품 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">인기 상품</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <Link key={product.id} to={`/product-detail/${product.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 카테고리 바로가기 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">카테고리별 쇼핑</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/product-list?category=${category.name}`} className="block">
              <div className="bg-blue-100 rounded-lg p-4 text-center hover:bg-blue-200 transition-colors">
                <span className="text-4xl mb-2 block">{category.icon}</span>
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;