import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">집착 소개</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">집착</h2>
          <p className="text-lg text-gray-600">우리 "집"에 "착"한 제안</p>
          <p className="text-lg text-gray-600">우리 "집단"에 "착"한 제안</p>
        </div>
        <p className="mb-4">
          집착은 같은 커뮤니티나 조직 내의 사람들을 연결하여 함께 구매하고 다양한 제품과 서비스에 대한 할인을 즐길 수 있는 커뮤니티 기반 공동구매 플랫폼입니다.
        </p>
        <p className="mb-4">
          우리의 미션은 구성원들의 집단 구매력을 활용하여 커뮤니티를 강화하고, 모든 참여자에게 절약의 기회를 제공하는 것입니다.
        </p>
        <h2 className="text-2xl font-semibold mb-4">우리의 가치</h2>
        <ul className="list-disc list-inside mb-4">
          <li>커뮤니티 우선: 우리는 강하고 연결된 커뮤니티 구축을 최우선으로 합니다.</li>
          <li>투명성: 우리는 명확한 의사소통과 정직한 비즈니스 관행을 믿습니다.</li>
          <li>지속가능성: 우리는 책임감 있는 소비를 장려하고 친환경 제품을 지원합니다.</li>
          <li>혁신: 우리는 사용자에게 더 나은 서비스를 제공하기 위해 지속적으로 플랫폼을 개선합니다.</li>
        </ul>
        <p>
          오늘 집착에 가입하고 커뮤니티 기반 쇼핑의 힘을 경험해보세요!
        </p>
      </div>
    </div>
  );
};

export default About;