import { WiDaySunny, WiDayCloudy, WiCloudy, WiRain, WiThunderstorm, WiSnow } from 'react-icons/wi';

const getIcon = (pty, sky) => {
  if (pty === '1') return <WiRain size={32} />; // 비
  if (pty === '2') return <WiRain size={32} />; // 비/눈
  if (pty === '3') return <WiSnow size={32} />; // 눈
  if (pty === '4') return <WiThunderstorm size={32} />; // 소나기

  // PTY가 0일 때는 하늘상태(SKY)로 판단
  switch (sky) {
    case '1':
      return <WiDaySunny size={32} />; // 맑음
    case '3':
      return <WiDayCloudy size={32} />; // 구름 많음
    case '4':
      return <WiCloudy size={32} />; // 흐림
    default:
      return <WiDaySunny size={32} />;
  }
};

export default function DailyForecast({ dailyData }) {
  return (
    <section>
      <h2 className='text-lg font-semibold mb-2'>주간 예보</h2>
      <ul className='space-y-2 bg-white/10 rounded-lg px-4 py-2'>
        {dailyData.map((d, i) => (
          <li key={i} className='flex justify-between items-center py-2 border-b border-gray-50/20'>
            <span className='w-8'>{d.date}</span>
            <span className='flex-1 flex justify-center'>{getIcon(d.pty, d.sky)}</span>
            <span className='text-sm'>
              {d.minTemp}° / <b>{d.maxTemp}°</b>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
