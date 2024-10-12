import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">집착</h3>
          <p>당신의 커뮤니티 기반 공동구매 플랫폼</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">빠른 링크</h4>
          <ul>
            <li><Link to="/about">회사 소개</Link></li>
            <li><Link to="/customer-support">고객 지원</Link></li>
            <li><Link to="/service-explanation">이용 방법</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-2">연락처</h4>
          <p>이메일: support@zipchak.com</p>
          <p>전화: (123) 456-7890</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; 2024 집착. 모든 권리 보유.</p>
      </div>
    </footer>
  );
};

export default Footer;