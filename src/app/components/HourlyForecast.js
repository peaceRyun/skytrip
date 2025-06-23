'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HourlyForecast({ hourlyData }) {
  return (
    <section>
      <h2 className='text-lg font-semibold mb-2 py-2'>시간별 예보</h2>
      <Swiper spaceBetween={16} slidesPerView={'auto'} className='px-4 pb-4 bg-white/20 rounded-xl'>
        {hourlyData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{ width: '64px' }}
            className={`backdrop-blur-sm px-3 py-2 rounded-xl text-center ${idx === 0 ? 'ml-2 md:ml-4' : ''}`}
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
