export default function WeatherItem({ weatherData }) {
  return (
    <div>
      {weatherData && (
        <ul className="grid grid-cols-2 gap-3 p-2 mx-auto bg-blue-50">
          <li>The Weather Data</li>
          <li>Latitude: {weatherData.latitude}</li>
          <li>Longitude: {weatherData.longitude}</li>
          <li>Temperature: {weatherData.current.apparent_temperature}</li>
          <li>Time: {weatherData.current.time}</li>
        </ul>
      )}
    </div>
  );
}
