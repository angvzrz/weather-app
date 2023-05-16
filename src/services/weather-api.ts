/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getFetch } from 'lib/fetch';
import type { I5DayForecast, IForecastDay, IWeather } from 'types/types';

const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';

export function getWeather(city: string): Promise<IWeather> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const requestUrl = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;

  return getFetch(requestUrl).then((response: any) => {
    const mainWeather: IWeather = {
      place: response.name,
      temp: response.main.temp,
      main: response.weather[0].main,
      description: response.weather[0].description,
      humidity: response.main.humidity,
      wind_speed: response.wind.speed,
      icon: response.weather[0].icon,
    };

    return mainWeather;
  });
}

export function getForecast(city: string): Promise<IForecastDay[]> {
  const baseUrl: string = process.env.NEXT_PUBLIC_FORECAST_URL ?? '';
  const requestUrl = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;

  return getFetch<IWeather[]>(requestUrl).then((response: any) => {
    const forecastData: I5DayForecast[] = response?.list;

    // start populating at the middle day of the first day
    // and then add the data of the middle day of the next day successively
    const cardsWeekForecast: IForecastDay[] = forecastData
      .filter((_, index) => index === 3 || (index > 3 && (index - 3) % 8 === 0))
      .map((day) => ({
        temp: day.main.temp,
        description: day.weather[0]?.main,
        humidity: day.main.humidity,
        wind_speed: day.wind.speed,
        icon: day.weather[0]?.icon,
      }));

    return cardsWeekForecast;
  });
}
