import { getForecast } from '@/services/weather-api';
import { useEffect, useState } from 'react';
import { WeatherConditions } from './weather-conditions';
import { type IWeather } from 'types/types';

interface WeatherForecastProps {
  city: string;
}

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function WeatherForecast({ city }: WeatherForecastProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [forecastData, setForecastData] = useState<IWeather[]>([]);
  const [next5Days, setNext5Days] = useState<string[]>([]);

  useEffect(() => {
    const currentDayIndex: number = new Date().getDay();
    const nextDays: string[] = [];

    for (let i = 0; i <= 5; i++) {
      const nextDayIndex: number = (currentDayIndex + i) % 7;
      nextDays.push(weekDays[nextDayIndex] ?? '');
    }

    setNext5Days(nextDays);
  }, []);

  useEffect(() => {
    getForecast(city)
      .then((data) => {
        setIsLoaded(true);
        setForecastData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  return (
    <section className="bg-slate-100 mx-auto mt-6 w-11/12 ">
      <h2 className="w-full px-2 py-4 text-center text-xl">
        Next 5 days weather for {city}
      </h2>
      <div className="grid h-full grid-flow-col gap-4 overflow-x-scroll">
        {isLoaded &&
          forecastData.length > 0 &&
          forecastData.map((weatherDay, index) => (
            <WeatherConditions
              key={index}
              weather={weatherDay}
              day={next5Days[index]}
            />
          ))}
      </div>
    </section>
  );
}
