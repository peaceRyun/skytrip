export function groupForecastByDate(data) {
    return data.reduce((acc, item) => {
        const { fcstDate } = item;
        if (!acc[fcstDate]) acc[fcstDate] = [];
        acc[fcstDate].push(item);
        return acc;
    }, {});
}

export const getBaseTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();

    // 현재 분이 30분 미만이면 이전 시간을 baseTime으로 설정합니다.
    // 예를 들어, 10시 29분이면 0900을, 10시 30분이면 1000을 반환해야 합니다.
    if (minutes < 30) {
        hours = hours - 1;
        // 자정을 넘어가면 23시로 설정합니다. (00시 00분 ~ 00시 29분 사이에는 전날 23시를 사용)
        if (hours < 0) {
            hours = 23;
        }
    }

    // 시간을 'HH' 형식의 문자열로 포맷합니다. (예: 9시 -> '09', 10시 -> '10')
    const result = String(hours).padStart(2, '0') + '00';

    return result;
};
