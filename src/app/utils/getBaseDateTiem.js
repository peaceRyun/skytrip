export function getBaseDateTime() {
  const now = new Date();

  // 현재 시간이 02:10이라면, base_time은 0200
  // 기상청은 0200, 0500, 0800... 식의 3시간 단위 제공

  const hours = now.getHours();
  const baseHours = [2, 5, 8, 11, 14, 17, 20, 23];

  // 가장 가까운 과거의 baseTime 찾기
  const closestHour = baseHours.reduce((prev, curr) => (hours >= curr ? curr : prev));

  const baseDate = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD

  const baseTime = String(closestHour).padStart(2, '0') + '00';

  return { baseDate, baseTime };
}
