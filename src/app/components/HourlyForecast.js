'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { WiDaySunny, WiDayCloudy, WiCloudy, WiRain } from 'react-icons/wi';

const dummyHours = [
  { hour: '13시', icon: <WiDaySunny size={24} />, temp: '27°' },
  { hour: '14시', icon: <WiDayCloudy size={24} />, temp: '28°' },
  { hour: '15시', icon: <WiDayCloudy size={24} />, temp: '29°' },
  { hour: '16시', icon: <WiDaySunny size={24} />, temp: '30°' },
  { hour: '17시', icon: <WiCloudy size={24} />, temp: '28°' },
  { hour: '18시', icon: <WiCloudy size={24} />, temp: '28°' },
  { hour: '19시', icon: <WiRain size={24} />, temp: '26°' },
  { hour: '20시', icon: <WiRain size={24} />, temp: '25°' },
];

export default function HourlyForecast() {
  return (
    <section className=''>
      <h2 className='text-lg font-semibold mb-2  py-2'>시간별 예보</h2>
      <Swiper spaceBetween={16} slidesPerView={'auto'} className='px-4 pb-4 bg-white/20 rounded-xl'>
        {dummyHours.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{ width: '64px' }}
            className={`backdrop-blur-sm px-3 py-2 rounded-xl text-center  ${idx === 0 ? 'ml-2 md:ml-4' : ''}`}
          >
            <p className='text-sm'>{item.hour}</p>
            <div className='my-1 flex justify-center'>{item.icon}</div>
            <p className='text-sm'>{item.temp}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
