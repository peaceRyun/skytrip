'use client';

import { WiDaySunny, WiDayCloudy, WiCloudy, WiRain } from 'react-icons/wi';
import { useWeather } from '../hooks/useWeather';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import CurrentWeather from '../components/CurrentWeather';
import DailyForecast from '../components/DailyForecast';
import HourlyForecast from '../components/HourlyForecast';
import PlaceRecommendation from '../components/PlaceRecommendation';
import WeatherDetails from '../components/WeatherDetails';
import WeatherSummary from '../components/WeatherSummary';
import { groupForecastByDate } from '../utils/utils';
import useGeolocation from '../hooks/useGeolocation';
import useLocationStore from '../store/location';

export default function HomePage() {
  useGeolocation();
  dayjs.locale('ko');
  const { nx, ny } = useLocationStore();
  const baseDate = dayjs().format('YYYYMMDD');
  const baseTime = '1400';
  const { data, isLoading } = useWeather({ nx, ny, baseDate, baseTime });

  if (isLoading) return <p className='text-white'>날씨 로딩 중...</p>;
  if (!data) return <p className='text-white'>날씨 데이터를 불러오지 못했습니다.</p>;

  const grouped = groupForecastByDate(data);
  const today = dayjs().format('YYYYMMDD');
  const currentItems = grouped[today] || [];
  const firstForecast =
    currentItems.find((d) => d.category === 'T1H') || currentItems.find((d) => d.category === 'TMP');
  const current = firstForecast ? currentItems.filter((d) => d.fcstTime === firstForecast.fcstTime) : [];
  const dailyData = Object.entries(grouped)
    .slice(0, 7)
    .map(([date, items]) => {
      const temps = items
        .filter((d) => d.category === 'T3H' || d.category === 'TMP')
        .map((d) => Number(d.fcstValue))
        .filter((v) => !isNaN(v));

      const maxTemp = temps.length > 0 ? Math.max(...temps) : '-';
      const minTemp = temps.length > 0 ? Math.min(...temps) : '-';

      const pty = items.find((d) => d.category === 'PTY')?.fcstValue || '0';

      return {
        date: dayjs(date).format('ddd'),
        maxTemp,
        minTemp,
        pty,
      };
    });

  const hourlyData = currentItems
    .filter((d) => d.category === 'TMP')
    .map((item) => ({
      hour: `${item.fcstTime.slice(0, 2)}시`,
      temp: `${item.fcstValue}°`,
      icon: getWeatherIcon(currentItems, item.fcstTime),
    }));
  function getWeatherIcon(data, time) {
    const sky = data.find((d) => d.fcstTime === time && d.category === 'SKY')?.fcstValue;
    const pty = data.find((d) => d.fcstTime === time && d.category === 'PTY')?.fcstValue;

    if (pty && pty !== '0') return <WiRain size={24} />;
    if (sky === '1') return <WiDaySunny size={24} />;
    if (sky === '3') return <WiDayCloudy size={24} />;
    if (sky === '4') return <WiCloudy size={24} />;
    return <WiDaySunny size={24} />;
  }

  return (
    <main className='min-h-screen bg-gradient-to-b from-sky-400 to-blue-900 text-white px-4 py-6'>
      <div className='max-w-xl mx-auto space-y-8'>
        <CurrentWeather current={current} />
        <HourlyForecast hourlyData={hourlyData} />
        <DailyForecast dailyData={dailyData} />
        <WeatherDetails current={current} />
        <PlaceRecommendation />
      </div>
    </main>
  );
}
