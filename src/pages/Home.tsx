import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Users,
  Percent,
  Truck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import SignupModal from '../components/SignupModal';
import ServiceExplanationCards from '../components/ServiceExplanationCards';
import { Loader } from '@googlemaps/js-api-loader';

const Home: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      setMapLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.3825, lng: 126.6586 },
        zoom: 13,
      });

      // Add markers for nearby stores
      nearbyStores.forEach((store) => {
        new google.maps.Marker({
          position: { lat: store.lat, lng: store.lng },
          map: map,
          title: store.name,
        });
      });
    }
  }, [mapLoaded]);

  const nearbyStores = [
    { name: '송도 센트럴파크점', lat: 37.3825, lng: 126.6586 },
    { name: '인천 연수구점', lat: 37.41, lng: 126.67 },
    { name: '인천 송도 트리플스트리트점', lat: 37.389, lng: 126.639 },
    { name: '인천 청라점', lat: 37.533, lng: 126.647 },
    { name: '부평 문화의거리점', lat: 37.494, lng: 126.7242 },
  ];

  const popularProducts = [
    {
      id: 1,
      name: '스마트 TV',
      image:
        'https://i.pinimg.com/564x/21/3b/cf/213bcf13a03ab0f507f2db218323399b.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 2,
      name: '무선 이어버드',
      image:
        'https://i.pinimg.com/control/564x/a3/1c/ae/a31cae22f1abbeceeeb0a3fd47e16219.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 3,
      name: '커피 메이커',
      image:
        'https://i.pinimg.com/564x/fc/4a/1c/fc4a1cc7b4473d896981951000c37f24.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 4,
      name: '피트니스 트래커',
      image:
        'https://i.pinimg.com/564x/cd/cd/ab/cdcdabfb9b5259236eb5b6a7d4f17666.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 5,
      name: '우유',
      image:
        'https://i.pinimg.com/control/564x/fd/60/ce/fd60cec155388817149d807798f47797.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 6,
      name: '식빵',
      image:
        'https://i.pinimg.com/control/564x/5a/89/0f/5a890f35928b4b00907c1929a9b63288.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 7,
      name: '도시락',
      image: 'https://i.pinimg.com/564x/c1/02/31/c102313908375fcccf0e13a088018336.jpg',
      location: '송도 센트럴파크',
    },
    {
      id: 8,
      name: '샐러드',
      image: 'https://i.pinimg.com/564x/79/99/a6/7999a603b5922a532a9482374e45184f.jpg',
      location: '송도 센트럴파크',
    },
  ];

  const categories = [
    { id: 1, name: '전자기기', icon: '🖥️' },
    { id: 2, name: '홈 & 가든', icon: '🏡' },
    { id: 3, name: '패션', icon: '👚' },
    { id: 4, name: '뷰티', icon: '💄' },
    { id: 5, name: '식품', icon: '🍽️' },
    { id: 6, name: '도서', icon: '📚' },
    { id: 7, name: '골프', icon: '⛳' },
    { id: 8, name: '피트니스', icon: '🏋️' },
    { id: 9, name: '테니스', icon: '🎾' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 서비스 소개 영역 */}
      <section className="mb-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          내 집에 착한제안
        </h1>
        <div className="mt-12 text-center">
          <button
            onClick={openSignupModal}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-xl hover:bg-blue-100 transition-colors duration-300"
          >
            지금 그룹구매 시작하기
          </button>
        </div>
      </section>

      <ServiceExplanationCards />

      {/* 지도와 근처 스토어 리스트 */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          내 주변 집착스토어
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden shadow-lg">
            {mapLoaded ? (
              <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p>Loading map...</p>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <div className="h-96 overflow-y-auto pr-4 space-y-4">
              {nearbyStores.map((store, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-medium text-gray-800 mb-2">
                    {store.name}
                  </h4>
                  <button
                    onClick={openSignupModal}
                    className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    내 집착지역으로 추가
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 인기 상품 */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          인기 상품
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product-detail/${product.id}`}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 카테고리별 쇼핑 */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          카테고리별 쇼핑
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/product-list?category=${category.name}`}
              className="block"
            >
              <div className="bg-white rounded-xl p-6 text-center hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg">
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {isSignupModalOpen && <SignupModal onClose={closeSignupModal} />}
    </div>
  );
};

export default Home;
