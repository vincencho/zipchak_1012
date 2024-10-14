import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import StoreMap from '../components/StoreMap';

const StoreSetup: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 더미 데이터: 실제 구현에서는 API를 통해 가져와야 합니다.
  const nearbyStores = [
    { name: '송도 센트럴파크점', lat: 37.3825, lng: 126.6586 },
    { name: '인천 연수구점', lat: 37.4100, lng: 126.6700 },
    { name: '인천 송도 트리플스트리트점', lat: 37.3890, lng: 126.6390 },
    { name: '인천 청라점', lat: 37.5330, lng: 126.6470 },
    { name: '부평 문화의거리점', lat: 37.4940, lng: 126.7242 },
  ];

  const handleStoreSelect = (store: string) => {
    setSelectedStore(store);
  };

  const handleSubmit = () => {
    if (selectedStore) {
      setIsLoading(true);
      // 실제 구현에서는 여기에 선택된 스토어 정보를 서버에 전송하는 로직을 추가합니다.
      console.log('선택된 스토어:', selectedStore);
      
      // 로딩 시간을 시뮬레이션합니다 (실제 구현에서는 API 호출 등으로 대체)
      setTimeout(() => {
        setIsLoading(false);
        navigate('/product-list'); // 상품 페이지로 이동
      }, 2000);
    } else {
      alert('집착스토어를 선택해주세요.');
    }
  };

  const filteredStores = nearbyStores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <LoadingScreen location={selectedStore || ''} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          집착스토어 설정
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          현재 위치: 인천광역시 연수구 (예시)
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <StoreMap stores={nearbyStores} />
          
          <div className="mb-4">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              스토어 검색
            </label>
            <input
              type="text"
              id="search"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="스토어 이름 입력"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {filteredStores.map((store) => (
              <div key={store.name} className="flex items-center">
                <input
                  id={store.name}
                  name="store"
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={selectedStore === store.name}
                  onChange={() => handleStoreSelect(store.name)}
                />
                <label htmlFor={store.name} className="ml-3 block text-sm font-medium text-gray-700">
                  {store.name}
                </label>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              무료로 이용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSetup;