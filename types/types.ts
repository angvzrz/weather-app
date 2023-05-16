export interface IWeather {
  place?: string;
  temp: number;
  main: string;
  description: string;
  humidity: number;
  wind_speed: number;
  icon: string;
}
