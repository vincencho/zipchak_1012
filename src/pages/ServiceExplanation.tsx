import React from 'react';
import { ShoppingBag, Users, Percent, Barcode } from 'lucide-react';

const ServiceExplanation: React.FC = () => {
  const features = [
    { icon: <ShoppingBag size={24} />, title: '공동구매', description: '다른 사람들과 함께 구매하여 더 좋은 가격으로 상품을 구입하세요.' },
    { icon: <Users size={24} />, title: '커뮤니티 중심', description: '지역 커뮤니티나 조직의 사람들과 연결하세요.' },
    { icon: <Percent size={24} />, title: '비용 절감', description: '다양한 제품과 서비스에 대한 할인을 즐기세요.' },
    { icon: <Barcode size={24} />, title: '간편한 픽업', description: '고객님이 위치한 지역의 집착스토어에서 바코드로 간단히 픽업하세요.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">집착 이용방법</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          시작하기
        </button>
      </div>
    </div>
  );
};

export default ServiceExplanation;