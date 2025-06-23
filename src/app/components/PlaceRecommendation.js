'use client';

import { useState } from 'react';
import { useRecommendedPlaces } from '../hooks/useRecommendedPlaces';
import { getIconByCategory } from '../lib/iconMapper';
import CategoryFilter from './CategoryFilter';
import MapModal from './MapModal';

export default function PlaceRecommendation() {
  const [category, setCategory] = useState('맛집');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const { data: places, isLoading } = useRecommendedPlaces(category);

  return (
    <section>
      <h2 className='text-lg font-semibold mb-2'>오늘의 추천 장소</h2>
      <CategoryFilter selected={category} onChange={setCategory} />

      {isLoading ? (
        <p className='text-sm text-white mt-4'>장소 불러오는 중...</p>
      ) : (
        <ul className='space-y-3 mt-2'>
          {places.slice(0, 5).map((place, i) => (
            <li
              key={i}
              className='flex items-center justify-between bg-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/20 transition'
              onClick={() =>
                setSelectedPlace({
                  place_name: place.place_name,
                  lat: place.y,
                  lng: place.x,
                })
              }
            >
              <div className='flex items-center gap-3'>
                <div className='text-xl text-blue-100'>{getIconByCategory(place.category_name)}</div>
                <div className='flex flex-col'>
                  <span>{place.place_name}</span>
                  <span className='text-xs text-gray-300'>{place.address_name}</span>
                </div>
              </div>
              <span className='text-sm'>{Number(place.distance / 1000).toFixed(1)}km</span>
            </li>
          ))}
        </ul>
      )}

      {selectedPlace && <MapModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />}
    </section>
  );
}
