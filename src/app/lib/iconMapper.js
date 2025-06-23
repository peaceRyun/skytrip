import { FaUtensils, FaTree, FaCoffee, FaHeart } from 'react-icons/fa';

export function getIconByCategory(categoryName = '') {
  if (categoryName.includes('음식')) return <FaUtensils />;
  if (categoryName.includes('카페')) return <FaCoffee />;
  if (categoryName.includes('공원')) return <FaTree />;
  if (categoryName.includes('데이트') || categoryName.includes('명소')) return <FaHeart />;
  return <FaUtensils />; // 기본값
}
