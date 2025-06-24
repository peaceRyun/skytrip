import Script from 'next/script';
import { QueryProvider } from './components/providers/QueryProvider';
import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'SkyTrip',
  description: '하늘 따라가는 여행',
};

const pretendard = localFont({
  src: '/fonts/pretendardVariable.woff2',
  display: 'swap',
  preload: true,
  weight: '400 700',
});

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <head></head>
      <body className={`${pretendard.className}`}>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
          strategy='beforeInteractive'
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
