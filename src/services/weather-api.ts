/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getFetch } from 'lib/fetch';
import { type IWeather } from 'types/types';

export function getWeather(city: string): Promise<IWeather> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';
  const requestUrl = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;

  return getFetch<IWeather>(requestUrl).then((response: any) => {
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
