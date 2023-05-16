import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import type { IWeather } from 'types/types';

interface WeatherConditionsProps {
  weather: IWeather;
}

export function WeatherConditions({ weather }: WeatherConditionsProps) {
  const { main, description, place, icon, humidity, temp, wind_speed } =
    weather;
  const iconUrl = process.env.NEXT_PUBLIC_ICON_URL ?? '';
  const iconSrc = `${iconUrl}${icon}@4x.png`;

  return (
    <Card
      shadow={true}
      className="w-full max-w-[26rem] bg-gradient-to-r from-cyan-500 to-blue-500 px-6"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex flex-col items-center gap-4 pb-8 pt-0"
      >
        <div className="text-center">
          <Avatar size="xxl" variant="circular" src={iconSrc} alt={main} />
          <Typography variant="h3">{main}</Typography>
        </div>
        <div className="flex w-full flex-col items-center gap-0.5">
          <Typography variant="h2">{temp}°C</Typography>
          <Typography variant="h4">{place}</Typography>
          <Typography color="white">{description}</Typography>
        </div>
      </CardHeader>
      <CardBody className="">
        <Typography>Humidity: {humidity}</Typography>
        <Typography>Wind Speed: {wind_speed}</Typography>
      </CardBody>
    </Card>
  );
}
