import CurrentWeather from '../components/CurrentWeather';
import DailyForecast from '../components/DailyForecast';
import HourlyForecast from '../components/HourlyForecast';
import PlaceRecommendation from '../components/PlaceRecommendation';
import WeatherDetails from '../components/WeatherDetails';
import WeatherSummary from '../components/WeatherSummary';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-sky-400 to-blue-900 text-white px-4 py-6'>
      <div className='max-w-xl mx-auto space-y-8'>
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
        <WeatherDetails />
        <PlaceRecommendation />
        {/* <MapViewButton /> */}
      </div>
    </main>
  );
}
