import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import LocationSearch from './LocationSearch';
import LocationConfirmation from './LocationConfirmation';

interface LocationModalProps {
  currentLocation: string;
  onLocationChange: (location: string) => void;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ currentLocation, onLocationChange, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState<'select' | 'search' | 'confirm'>('select');
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  const locations = [
    '잠실 헬리오시티',
    '강남 포스코타워',
    '판교 테크노밸리',
    '송도 센트럴파크',
    '광교 신도시',
  ];

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationChange = (location: string) => {
    setIsLoading(true);
    onLocationChange(location);
    
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      navigate('/');
    }, 2000);
  };

  const handleNewLocationRegistration = () => {
    setModalState('search');
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setModalState('confirm');
  };

  const handleLocationConfirm = () => {
    handleLocationChange(selectedLocation);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen location={currentLocation} />
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            {modalState === 'select' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">집착 지역 선택</h2>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="지역 검색"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="space-y-2">
                  {filteredLocations.map((location) => (
                    <button
                      key={location}
                      onClick={() => handleLocationChange(location)}
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        location === currentLocation
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
                <button
                  className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={handleNewLocationRegistration}
                >
                  + 신규 집착지역 등록
                </button>
              </>
            )}
            {modalState === 'search' && (
              <LocationSearch onSelect={handleLocationSelect} onBack={() => setModalState('select')} />
            )}
            {modalState === 'confirm' && (
              <LocationConfirmation
                location={selectedLocation}
                onConfirm={handleLocationConfirm}
                onBack={() => setModalState('search')}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LocationModal;