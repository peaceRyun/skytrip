'use client';

import { useEffect } from 'react';
import useLocationStore from '../store/location';
import { getAddressFromCoords } from '../lib/api/kakao';
import { latLngToXY } from '../utils/convert';

export default function useGeolocation() {
  const setCoords = useLocationStore((state) => state.setCoords);
  const setAddress = useLocationStore((state) => state.setAddress);
  const setLocation = useLocationStore((state) => state.setLocation);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('이 브라우저는 위치를 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords(latitude, longitude);

        const { nx, ny } = latLngToXY(latitude, longitude);
        setLocation({ nx, ny });

        try {
          const region = await getAddressFromCoords(latitude, longitude);
          const addr = `${region.region_1depth_name} ${region.region_2depth_name}`;
          setAddress(addr);
        } catch (e) {
          console.error('주소 변환 실패:', e.message);
        }
      },
      (err) => {
        console.error('❌ 위치 가져오기 실패:', err.message);
      }
    );
  }, [setCoords, setAddress]);
}
