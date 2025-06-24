'use client';

const categories = [
  { id: '맛집', label: '맛집' },
  { id: '카페', label: '카페' },
  { id: '공원', label: '공원' },
  { id: '데이트', label: '데이트' },
];

export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className='flex gap-2 overflow-x-auto pb-2'>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-1 rounded-full text-sm ${
            selected === cat.id ? 'bg-white/90 text-blue-900 font-semibold' : 'bg-white/30 text-white'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
