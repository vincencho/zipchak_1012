import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  Truck,
  Leaf,
  Users,
} from 'lucide-react';

const ServiceExplanationCards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: '집착이란?',
      description:
        '아파트단지, 회사, 학교에서 이웃/동료와 함께 평소 구매하는 상품을 상시할인 받는, 지역기반 "그룹구매" 플랫폼.',
      icon: <ShoppingBag className="w-16 h-16 text-blue-600" />,
    },
    {
      title: '왜 집착인가요?',
      description:
        '물가 상승으로 대량구매 트렌드가 계속되고 있어요. 우리는 이를 증명하듯 코스트코, 트레이더스를 자주 이용하죠.',
      icon: <TrendingUp className="w-16 h-16 text-green-600" />,
    },
    {
      title: '비용 절감',
      description:
        '물류비와 포장비 절감으로 보다 저렴한 가격에 구매할 수 있어요. 집착스토어에서 한 번에 픽업하여 효율적인 쇼핑이 가능합니다.',
      icon: <DollarSign className="w-16 h-16 text-yellow-600" />,
    },
    {
      title: '편리한 픽업',
      description:
        '집착스토어에서 모든 상품을 한 번에 픽업할 수 있어요. 개별 배송 대신 효율적인 물류 시스템을 통해 시간과 비용을 절약하세요.',
      icon: <Truck className="w-16 h-16 text-purple-600" />,
    },
    {
      title: '친환경 소비',
      description:
        '포장재 사용을 줄이고 효율적인 물류 시스템을 통해 환경 보호에 기여하세요. 지속 가능한 소비 문화를 만들어갑니다.',
      icon: <Leaf className="w-16 h-16 text-green-600" />,
    },
    {
      title: '커뮤니티 강화',
      description:
        '이웃들과 함께 구매하며 유대감을 형성해요. 지역 커뮤니티를 중심으로 새로운 소비 문화를 만들어갑니다.',
      icon: <Users className="w-16 h-16 text-blue-600" />,
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 7000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const leftIndex = (currentCard - 1 + cards.length) % cards.length;
    const rightIndex = (currentCard + 1) % cards.length;
    return [leftIndex, currentCard, rightIndex];
  };

  return (
    <div className="relative max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        집착 서비스 소개
      </h2>
      <div className="relative h-[70vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {getVisibleCards().map((index, position) => {
          const card = cards[index];
          const offset = position - 1; // -1 for left, 0 for center, 1 for right
          const isActive = offset === 0;
          const zIndex = cards.length - Math.abs(offset);
          const opacity = Math.max(1 - Math.abs(offset) * 0.5, 0);
          const scale = 1 - Math.abs(offset) * 0.1;
          const translateX = offset * 100 + '%';

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                isActive ? 'z-10' : ''
              }`}
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity,
                zIndex,
                width: 'calc(100% - 2rem)',
                maxWidth: '500px',
                height: '90%',
              }}
            >
              <div className="bg-white rounded-xl shadow-2xl p-8 h-full transition-all duration-300 hover:shadow-3xl flex flex-col justify-between">
                <div className="flex justify-center mb-6">{card.icon}</div>
                <h3 className="text-3xl font-semibold mb-4 text-center text-gray-800">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-600 text-center flex-grow overflow-y-auto leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={prevCard}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 shadow-md hover:bg-opacity-75 transition-all duration-300 z-20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextCard}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 shadow-md hover:bg-opacity-75 transition-all duration-300 z-20"
      >
        <ChevronRight size={28} />
      </button>
      <div className="flex justify-center mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCard(index)}
            className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
              index === currentCard
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceExplanationCards;
