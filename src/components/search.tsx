import { getWeather } from '@/services/weather-api';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import type { IWeather } from 'types/types';

interface SearchProps {
  setForecast: (forecast: IWeather) => void;
}

export function Search({ setForecast }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnClick = () => {
    getWeather(searchValue)
      .then((response) => setForecast(response))
      .catch((error) => console.error(error));

    localStorage.setItem('lastSearchQuery', searchValue);
  };
  return (
    <div className="relative flex w-full gap-2 md:w-max">
      <Input
        type="search"
        label="Weather in city..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="pr-24"
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
  );
}
