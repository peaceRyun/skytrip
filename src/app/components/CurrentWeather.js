'use client';
import useLocationStore from '../store/location';

export default function CurrentWeather({ current, currdata, isLoadingCurr }) {
    const address = useLocationStore((state) => state.address);

    let rn1;
    let pty;
    let temperature;
    if (!isLoadingCurr && currdata && Array.isArray(currdata)) {
        rn1 = parseFloat(currdata?.find((d) => d.category === 'RN1')?.obsrValue);
        pty = currdata?.find((d) => d.category === 'PTY')?.obsrValue;
        temperature = currdata?.find((d) => d.category === 'T1H')?.obsrValue ?? '--';
    }

    const sky = current?.find((d) => d.category === 'SKY')?.fcstValue;

    const getWeatherDescription = () => {
        // 1시간 강수량이 1mm 이상인 경우 강수형태 우선
        if (rn1 > 0 && pty) {
            switch (pty) {
                case '1':
                    return '비';
                case '2':
                    return '비/눈';
                case '3':
                    return '눈';
                case '4':
                    return '소나기';
                default:
                    return '강수';
            }
        }

        // 강수가 없는 경우 하늘상태로 판단
        switch (sky) {
            case '1':
                return '맑음';
            case '3':
                return '구름 많음';
            case '4':
                return '흐림';
            default:
                return '정보 없음';
        }
    };

    const description = getWeatherDescription();

    return (
        <section className='text-center space-y-1'>
            <p className='text-sm text-blue-100'>나의 위치</p>
            <h1 className='text-3xl text-blue-100'>{address || '위치 불러오는 중...'}</h1>
            <p className='text-lg'>{description}</p>
            <p className='text-xl font-semibold'>{temperature}°C</p>
        </section>
    );
}
