import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface StoreMapProps {
  stores: { name: string; lat: number; lng: number }[];
}

const StoreMap: React.FC<StoreMapProps> = ({ stores }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 37.3825, lng: 126.6586 }, // 송도 중심 좌표
          zoom: 12,
        });

        stores.forEach((store) => {
          new google.maps.Marker({
            position: { lat: store.lat, lng: store.lng },
            map: map,
            title: store.name,
          });
        });
      }
    });
  }, [stores]);

  return <div ref={mapRef} style={{ width: '100%', height: '300px', marginBottom: '1rem' }} />;
};

export default StoreMap;