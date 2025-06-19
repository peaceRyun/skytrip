// components/DailyForecast.jsx
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

const daily = [
  { day: '목', icon: <WiDaySunny size={32} />, high: 29, low: 21 },
  { day: '금', icon: <WiCloudy size={32} />, high: 27, low: 20 },
  { day: '토', icon: <WiRain size={32} />, high: 24, low: 19 },
  { day: '일', icon: <WiDaySunny size={32} />, high: 28, low: 20 },
];

export default function DailyForecast() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">주간 예보</h2>
      <ul className="space-y-2">
        {daily.map((d, i) => (
          <li key={i} className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2">
            <span className="w-8">{d.day}</span>
            <span className="flex-1 flex justify-center">{d.icon}</span>
            <span className="text-sm">{d.low}° / <b>{d.high}°</b></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
