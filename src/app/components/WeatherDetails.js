import { WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';

export default function WeatherDetails({ current }) {
  // 데이터를 category 기반으로 추출
  const reh = current.find((d) => d.category === 'REH')?.fcstValue ?? '-';
  const wsd = current.find((d) => d.category === 'WSD')?.fcstValue ?? '-';
  const pres = current.find((d) => d.category === 'PTY')?.fcstValue ?? '-'; // 기압값은 API에 없을 수도 있어, 대체 필요

  const details = [
    { label: '습도', value: `${reh}%`, icon: <WiHumidity size={28} /> },
    { label: '풍속', value: `${wsd} m/s`, icon: <WiStrongWind size={28} /> },
    { label: '기압', value: `${pres} hPa`, icon: <WiBarometer size={28} /> }, // 실제로는 PTY 말고 기압 데이터 필요
  ];

  return (
    <section>
      <h2 className='text-lg font-semibold mb-2'>상세 정보</h2>
      <div className='grid grid-cols-3 gap-4'>
        {details.map((item, i) => (
          <div key={i} className='flex flex-col items-center bg-white/10 p-3 rounded-lg'>
            <div className='mb-1 text-blue-100'>{item.icon}</div>
            <p className='text-sm'>{item.label}</p>
            <p className='font-semibold'>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
