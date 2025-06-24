const SERVICE_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';

export async function fetchWeather({ nx, ny, baseDate, baseTime }) {
  const url = new URL(BASE_URL);

  url.searchParams.append('serviceKey', SERVICE_KEY);
  url.searchParams.append('dataType', 'JSON');
  url.searchParams.append('numOfRows', '1000');
  url.searchParams.append('pageNo', '1');
  url.searchParams.append('base_date', baseDate);
  url.searchParams.append('base_time', baseTime);
  url.searchParams.append('nx', nx);
  url.searchParams.append('ny', ny);

  try {
    const res = await fetch(url.toString());
    const json = await res.json();

    if (json.response?.header?.resultCode !== '00') {
      throw new Error(json.response?.header?.resultMsg || 'API 응답 오류');
    }

    return json.response.body.items.item;
  } catch (err) {
    console.error('❌ API 호출 실패:', err.message);
    throw err;
  }
}
