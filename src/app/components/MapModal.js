'use client';

import { useEffect, useRef } from 'react';
import { loadKakaoMapScript } from '../lib/loadKakaoMap';

export default function MapModal({ place, onClose }) {
  const mapRef = useRef(null);
  const handlePlaceSelect = (place) => {
    const { x, y } = place;
    const lat = parseFloat(y);
    const lng = parseFloat(x);

    // 지도 중심 이동
    mapRef.current.setCenter(new kakao.maps.LatLng(lat, lng));

    // 마커 이동
    markerRef.current.setPosition(new kakao.maps.LatLng(lat, lng));
  };
  useEffect(() => {
    const handleMap = () => {
      if (!window.kakao?.maps) {
        console.error('❌ Kakao 지도 객체가 없음');
        return;
      }

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(place.lat, place.lng),
        level: 3,
      });

      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.lat, place.lng),
      });
      marker.setMap(map);
    };

    if (window.kakao?.maps?.load) {
      window.kakao.maps.load(handleMap);
    } else {
      console.error('❌ kakao.maps.load 없음 - 스크립트 확인 필요');
    }
  }, [place]);

  return (
    <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
      <div className='bg-white rounded-lg w-full max-w-md h-96 relative'>
        <button
          className='absolute -top-8 right-0 bg-gray px-3 py-1 rounded text-sm font-medium cursor-pointer'
          onClick={onClose}
        >
          닫기
        </button>
        <div ref={mapRef} className='w-full h-full rounded-lg' />
      </div>
    </div>
  );
}
