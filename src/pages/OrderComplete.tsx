import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface LocationState {
  orderNumber: number;
}

const OrderComplete: React.FC = () => {
  const location = useLocation();
  const { orderNumber } = (location.state as LocationState) || { orderNumber: Math.floor(Math.random() * 1000000) };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <CheckCircle size={64} className="mx-auto text-green-500" />
          <h1 className="text-2xl font-bold mt-4">주문 완료!</h1>
          <p className="text-gray-600">주문해 주셔서 감사합니다.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">주문 상세</h2>
          <p><strong>주문 번호:</strong> {orderNumber}</p>
          <p><strong>예상 배송일:</strong> {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        </div>
        <div className="text-center">
          <Link
            to="/product-list"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;