import { Navbar, Typography } from '@material-tailwind/react';
import { Search } from './search';
import type { IWeather } from 'types/types';

interface HeaderProps {
  setForecast: (forecast: IWeather) => void;
  setError: (message: string) => void;
  setShowAlert: (value: boolean) => void;
}

export function Header({ setForecast, setError, setShowAlert }: HeaderProps) {
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
          <Search
            setForecast={setForecast}
            setError={setError}
            setShowAlert={setShowAlert}
          />
        </div>
      </Navbar>
    </header>
  );
}
