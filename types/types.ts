export interface IWeather {
  place?: string;
  temp?: number;
  main?: string;
  description?: string;
  humidity?: number;
  wind_speed?: number;
  icon?: string;
}

export type IForecastDay = Omit<IWeather, 'place' | 'main'>;

export interface I5DayForecast {
  main: { humidity: number; temp: number };
  weather: { main: string; icon: string }[];
  wind: { speed: number };
}
