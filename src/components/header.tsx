import { getWeather } from '@/services/weather-api';
import { Button, Input, Navbar, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import type { IWeather } from 'types/types';

interface HeaderProps {
  setForecast: (forecast: IWeather) => void;
}

export function Header({ setForecast }: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleOnClick = () => {
    getWeather(searchValue)
      .then((response) => setForecast(response))
      .catch((error) => console.error(error));
  };

  return (
    <header>
      <Navbar className="mx-auto max-w-screen-xl rounded-none px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="ml-2 mr-4 cursor-pointer py-1.5"
          >
            <h1>Weather Report</h1>
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Weather in city..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pr-20"
              containerProps={{
                className: 'min-w-[288px]',
              }}
            />
            <Button
              type="submit"
              size="sm"
              onClick={handleOnClick}
              className="!absolute right-1 top-1 rounded bg-wr-pink"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
