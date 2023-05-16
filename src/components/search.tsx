import { getWeather } from '@/services/weather-api';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { type IWeather } from 'types/types';
import { type AxiosError } from 'axios';

interface SearchProps {
  setForecast: (forecast: IWeather) => void;
  setError: (message: string) => void;
  setShowAlert: (value: boolean) => void;
}

export function Search({ setForecast, setError, setShowAlert }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnClick = () => {
    getWeather(searchValue)
      .then((response) => {
        setForecast(response);
        localStorage.setItem('lastSearchQuery', searchValue);
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) {
          setError('That city does not exist. Please try with a different one');
          setShowAlert(true);
        }
      });
  };
  return (
    <div className="relative flex w-full gap-2 md:w-max">
      <Input
        color="cyan"
        type="search"
        label="Weather in city..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="pr-24 dark:text-white"
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
