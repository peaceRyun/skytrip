import { WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';

const details = [
  { label: '습도', value: '66%', icon: <WiHumidity size={28} /> },
  { label: '풍속', value: '2.5 m/s', icon: <WiStrongWind size={28} /> },
  { label: '기압', value: '1012 hPa', icon: <WiBarometer size={28} /> },
];

export default function WeatherDetails() {
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
