import { useQuery } from '@tanstack/react-query';
import useLocationStore from '../store/location';
import { searchPlacesByKeyword } from '../lib/api/kakao';

export function useRecommendedPlaces(keyword = '카페') {
  const coords = useLocationStore((state) => state.coords);

  return useQuery({
    queryKey: ['places', keyword, coords],
    enabled: !!coords, // 위치 받아온 뒤 실행
    queryFn: () => searchPlacesByKeyword(keyword, coords.lat, coords.lng),
    staleTime: 1000 * 60 * 10, // 10분 캐시
  });
}
