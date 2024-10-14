import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

interface LocationConfirmationProps {
  location: string;
  onConfirm: () => void;
  onBack: () => void;
}

const LocationConfirmation: React.FC<LocationConfirmationProps> = ({ location, onConfirm, onBack }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      setMapLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.5665, lng: 126.9780 }, // Seoul coordinates
        zoom: 13,
      });

      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(userLocation);
          new google.maps.Marker({
            position: userLocation,
            map: map,
          });
        });
      }
    }
  }, [mapLoaded]);

  return (
    <div>
      <div className="flex items-center mb-4">
        <button onClick={onBack} className="mr-2">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold">지역 확인</h2>
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '300px' }} className="mb-4"></div>
      <p className="mb-4">선택한 지역: {location}</p>
      <p className="mb-4">인증 상태: 확인 중...</p>
      <button
        onClick={onConfirm}
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        인증 완료
      </button>
    </div>
  );
};

export default LocationConfirmation;