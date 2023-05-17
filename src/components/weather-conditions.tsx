import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Typography,
} from '@material-tailwind/react';
import type { IWeather } from 'types/types';

interface WeatherConditionsProps {
  weather: IWeather;
  day?: string;
}

export function WeatherConditions({ weather, day }: WeatherConditionsProps) {
  const { main, description, place, icon, humidity, temp, wind_speed } =
    weather;
  const iconUrl: string = process.env.NEXT_PUBLIC_ICON_URL ?? '';
  const iconSrc = `${iconUrl}${icon ?? ''}@4x.png`;
  return (
    <Card
      shadow={true}
      className="h-4/5 w-full sm:max-w-[26rem]  
      bg-gradient-to-r from-cyan-500 to-blue-500 
      px-6 
      dark:from-wr-pale-blue dark:to-wr-pale-cornflower
      "
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex flex-col items-center gap-4 pb-6 pt-0"
      >
        {day && <h3>{day}</h3>}
        <div className="text-center">
          {icon ? (
            <Avatar size="xxl" variant="circular" src={iconSrc} alt={main} />
          ) : (
            <Spinner className="h-10 w-10" />
          )}
          <Typography variant="h3">{main}</Typography>
          <Typography variant="h2" className="text-xl md:text-4xl">{temp}°C</Typography>
        </div>
        <div className="flex w-full flex-col items-center gap-0.5">
          <Typography variant="h4">{place}</Typography>
          <Typography color="white">{description}</Typography>
        </div>
      </CardHeader>
      <CardBody className="py-2 flex gap-4">
        <Typography>Humidity: {humidity}</Typography>
        <Typography>Wind Speed: {wind_speed}</Typography>
      </CardBody>
    </Card>
  );
}
