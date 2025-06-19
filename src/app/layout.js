import './globals.css';

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
            <body className={`${pretendard.className}`}>{children}</body>
        </html>
    );
}
