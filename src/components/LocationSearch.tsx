import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LocationSearchProps {
  onSelect: (location: string) => void;
  onBack: () => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSelect, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // 더미 데이터 (실제 구현에서는 API를 사용해야 합니다)
  const allLocations = [
    '서울특별시 강남구', '서울특별시 서초구', '서울특별시 송파구',
    '경기도 성남시 분당구', '경기도 수원시 영통구', '경기도 용인시 수지구',
    '부산광역시 해운대구', '인천광역시 연수구', '대구광역시 수성구'
  ];

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredResults = allLocations.filter(location =>
        location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="flex items-center mb-4">
        <button onClick={onBack} className="mr-2">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">지역 검색</h2>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="지역명을 입력하세요"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 text-gray-800"
      />
      <div className="mt-4">
        {searchResults.map((result, index) => (
          <button
            key={index}
            onClick={() => onSelect(result)}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800"
          >
            {result}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;