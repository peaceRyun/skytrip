export function loadKakaoMapScript() {
  if (typeof window === 'undefined') return;

  if (document.getElementById('kakao-map-script')) return;

  const script = document.createElement('script');
  script.id = 'kakao-map-script';
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
  script.async = true;

  document.head.appendChild(script);
}
