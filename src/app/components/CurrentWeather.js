'use client';
import useLocationStore from '../store/location';

export default function CurrentWeather({ current }) {
  const address = useLocationStore((state) => state.address);

  const temperature =
    current?.find((d) => d.category === 'T1H')?.fcstValue ??
    current?.find((d) => d.category === 'TMP')?.fcstValue ??
    '--';

  const sky = current?.find((d) => d.category === 'SKY')?.fcstValue;
  const description = sky === '1' ? '맑음' : sky === '3' ? '구름 많음' : sky === '4' ? '흐림' : '정보 없음';

  return (
    <section className='text-center space-y-1'>
      <p className='text-sm text-blue-100'>나의 위치</p>
      <h1 className='text-3xl text-blue-100'>{address || '위치 불러오는 중...'}</h1>
      <p className='text-lg'>{description}</p>
      <p className='text-xl font-semibold'>{temperature}°C</p>
    </section>
  );
}
