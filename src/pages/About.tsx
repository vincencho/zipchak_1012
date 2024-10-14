import React, { useState } from 'react';
import { ShoppingBag, TrendingUp, DollarSign, Truck, Leaf, Users } from 'lucide-react';
import SignupModal from '../components/SignupModal';

const About: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-600">집착: 스마트한 그룹구매의 시작</h1>
        
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">집착은 어떤 서비스인가요?</h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              집착은 여러분의 일상을 더 스마트하고 경제적으로 만들어주는 <span className="font-semibold text-blue-600">지역 기반 그룹구매 플랫폼</span>입니다.
              아파트 단지, 회사, 학교 등 여러분의 커뮤니티에서 함께 구매하고 큰 할인을 받아보세요.
            </p>
            <div className="flex flex-wrap justify-center items-center mt-8">
              <div className="flex items-center bg-blue-100 rounded-full px-6 py-3 m-2">
                <ShoppingBag className="text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">그룹구매로 비용 절감</span>
              </div>
              <div className="flex items-center bg-green-100 rounded-full px-6 py-3 m-2">
                <Truck className="text-green-600 mr-2" />
                <span className="text-green-800 font-medium">편리한 픽업 서비스</span>
              </div>
              <div className="flex items-center bg-yellow-100 rounded-full px-6 py-3 m-2">
                <Users className="text-yellow-600 mr-2" />
                <span className="text-yellow-800 font-medium">커뮤니티 중심</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">왜 집착인가요?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                <TrendingUp className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">대량구매 트렌드</h3>
                <p className="text-gray-700">
                  물가 상승과 구매력 약화로 인해 소비자들은 대량구매를 선호합니다. 집착은 이러한 트렌드에 맞춰 더 큰 할인을 제공합니다.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg">
                <Leaf className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">친환경적 접근</h3>
                <p className="text-gray-700">
                  개별 배송을 줄이고 포장재 사용을 최소화하여 환경 보호에 기여합니다. 집착과 함께 지속 가능한 소비를 실천하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">집착의 장점</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<DollarSign className="w-12 h-12 text-blue-600" />}
                title="비용 절감"
                description="대량 구매를 통해 개인이 누리기 어려운 할인 혜택을 제공합니다."
              />
              <FeatureCard
                icon={<Truck className="w-12 h-12 text-blue-600" />}
                title="편리한 픽업"
                description="근처 집착스토어에서 간편하게 주문 상품을 픽업할 수 있습니다."
              />
              <FeatureCard
                icon={<ShoppingBag className="w-12 h-12 text-blue-600" />}
                title="다양한 상품"
                description="식품부터 생활용품까지, 다양한 카테고리의 상품을 제공합니다."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-blue-600" />}
                title="커뮤니티 강화"
                description="이웃들과 함께 구매하며 커뮤니티 유대감을 형성합니다."
              />
              <FeatureCard
                icon={<TrendingUp className="w-12 h-12 text-blue-600" />}
                title="포인트 적립"
                description="구매마다 포인트를 적립하여 추가 할인 혜택을 누리세요."
              />
              <FeatureCard
                icon={<Leaf className="w-12 h-12 text-blue-600" />}
                title="친환경 소비"
                description="개별 배송을 줄여 탄소 배출량 감소에 기여합니다."
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">집착과 함께 시작하세요</h2>
          <p className="text-xl text-gray-700 mb-8">
            스마트한 소비, 환경 보호, 그리고 커뮤니티의 힘을 경험해보세요.
          </p>
          <button
            onClick={openSignupModal}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            지금 가입하기
          </button>
        </section>
      </div>

      {isSignupModalOpen && <SignupModal onClose={closeSignupModal} />}
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default About;