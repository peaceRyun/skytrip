import { useQuery } from '@tanstack/react-query';
import { fetchCurrentWeather, fetchWeather } from '../lib/api/weather';

export function useWeather({ nx, ny, baseDate, baseTime }) {
    return useQuery({
        queryKey: ['weather', nx, ny, baseDate, baseTime],
        queryFn: () => fetchWeather({ nx, ny, baseDate, baseTime }),
        staleTime: 1000 * 60 * 60,
    });
}

export function useCurrWeather({ nx, ny, baseDate, baseTime }) {
    return useQuery({
        queryKey: ['currweather', nx, ny, baseDate, baseTime],
        queryFn: () => fetchCurrentWeather({ nx, ny, baseDate, baseTime }),
        staleTime: 1000 * 60 * 60,
    });
}
