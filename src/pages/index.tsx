import Head from 'next/head';
import { ErrorAlert } from '@/components/error-alert';
import { Header } from '@/components/header';
import { WeatherConditions } from '@/components/weather-conditions';
import { getWeather } from '@/services/weather-api';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { IWeather } from 'types/types';
import { WeatherForecast } from '@/components/weather-forecast';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Search } from '@/components/search';

const Home: NextPage = () => {
  const [currentWeather, setCurrentWeather] = useState<IWeather>({
    place: '',
    temp: 0,
    main: '',
    description: '',
    humidity: 0,
    wind_speed: 0,
    icon: '',
  });
  const [error, setError] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [city, setCity] = useState<string>('London');

  useEffect(() => {
    const lastSearch: string | null = localStorage.getItem('lastSearchQuery');
    let initialCity = 'london';

    if (lastSearch) {
      setCity(lastSearch);
      initialCity = lastSearch;
    }

    getWeather(initialCity)
      .then((response) => setCurrentWeather(response))
      .catch(() => {
        setError('An error ocurred in the server. Please try later');
        setShowAlert(true);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="Weather App that allows consulting weather in a city using OpenWeather API "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <DarkModeToggle />
        <Search
          setCurrentWeather={setCurrentWeather}
          setError={setError}
          setShowAlert={setShowAlert}
          setCity={setCity}
        />
      </Header>
      <main className="mx-auto flex h-screen flex-wrap px-4 py-8 dark:bg-wr-oxford-blue">
        {showAlert && (
          <ErrorAlert
            message={error}
            isOpen={showAlert}
            setIsOpen={setShowAlert}
          />
        )}
        <WeatherConditions weather={currentWeather} />
        <WeatherForecast city={city} />
      </main>
    </>
  );
};

export default Home;
