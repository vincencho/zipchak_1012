import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

declare global {
  interface Window {
    naver: any;
  }
}

interface LocationConfirmationProps {
  location: string;
  onConfirm: () => void;
  onBack: () => void;
}

const LocationConfirmation: React.FC<LocationConfirmationProps> = ({ location, onConfirm, onBack }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (mapRef.current) {
        const map = new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
          zoom: 13,
        });

        // 사용자의 현재 위치를 가져와 지도에 표시
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = new window.naver.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            map.setCenter(userLocation);
            new window.naver.maps.Marker({
              position: userLocation,
              map: map,
            });
          });
        }
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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