export function latLngToXY(lat, lon) {
  const RE = 6371.00877; // 지구 반지름(km)
  const GRID = 5.0; // 격자 간격 (km)
  const SLAT1 = 30.0; // 투영 위도1
  const SLAT2 = 60.0; // 투영 위도2
  const OLON = 126.0; // 기준 경도
  const OLAT = 38.0; // 기준 위도
  const XO = 43; // 기준 X좌표 (격자)
  const YO = 136; // 기준 Y좌표 (격자)

  const DEGRAD = Math.PI / 180.0;
  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  const sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  const sn_log = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  const sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  const sf_calc = (Math.pow(sf, sn_log) * Math.cos(slat1)) / sn_log;
  const ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  const ro_calc = (re * sf_calc) / Math.pow(ro, sn_log);

  const ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5);
  const ra_calc = (re * sf_calc) / Math.pow(ra, sn_log);
  let theta = lon * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn_log;

  const x = Math.floor(ra_calc * Math.sin(theta) + XO + 0.5);
  const y = Math.floor(ro_calc - ra_calc * Math.cos(theta) + YO + 0.5);

  return { nx: x, ny: y };
}
