import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingScreenProps {
  location: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ location }) => {
  return (
    <div className="fixed inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Loader className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">상품 정보 업데이트 중</h2>
        <p className="text-gray-600">
          {location}의 최신 상품 정보를 가져오고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;