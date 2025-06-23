const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

export async function getAddressFromCoords(lat, lng, keyword) {
  const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lng}&y=${lat}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
    },
  });

  if (!res.ok) {
    // 에러 디버깅
    // const errorText = await res.text();
    // console.error('실패:', errorText);

    throw new Error('주소 변환 실패');
  }

  const json = await res.json();
  return json.documents[0];
}

export async function searchPlacesByKeyword(keyword, lat, lng) {
  const res = await fetch(
    `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}&y=${lat}&x=${lng}&radius=5000`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
      },
    }
  );

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || '장소 검색 실패');
  return json.documents;
}
