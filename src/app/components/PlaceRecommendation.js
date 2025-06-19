import { FaUtensils, FaTree, FaCoffee } from 'react-icons/fa';

const places = [
  { name: '카페 모모', distance: '1.2km', icon: <FaCoffee /> },
  { name: '선유도공원', distance: '2.3km', icon: <FaTree /> },
  { name: '오므라이스 맛집', distance: '3.1km', icon: <FaUtensils /> },
];

export default function PlaceRecommendation() {
  return (
    <section>
      <h2 className='text-lg font-semibold mb-2'>오늘의 추천 장소</h2>
      <ul className='space-y-3'>
        {places.map((place, i) => (
          <li key={i} className='flex items-center justify-between bg-white/10 rounded-xl p-4'>
            <div className='flex items-center gap-3'>
              <div className='text-xl text-blue-100'>{place.icon}</div>
              <span>{place.name}</span>
            </div>
            <span className='text-sm'>{place.distance}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
