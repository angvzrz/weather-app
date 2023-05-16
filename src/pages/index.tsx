import Head from 'next/head';
import { ErrorAlert } from '@/components/error-alert';
import { Header } from '@/components/header';
import { WeatherConditions } from '@/components/weather-conditions';
import { getWeather } from '@/services/weather-api';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { IWeather } from 'types/types';

const Home: NextPage = () => {
  const [forecast, setForecast] = useState<IWeather>({
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

  useEffect(() => {
    const lastSearch: string | null = localStorage.getItem('lastSearchQuery');
    let initialCity = 'london';

    if (lastSearch) {
      initialCity = lastSearch;
    }

    getWeather(initialCity)
      .then((response) => setForecast(response))
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
      <Header
        setForecast={setForecast}
        setError={setError}
        setShowAlert={setShowAlert}
      />
      {showAlert && (
        <ErrorAlert
          message={error}
          isOpen={showAlert}
          setIsOpen={setShowAlert}
        />
      )}
      <main className="container mx-auto flex flex-wrap px-5 py-16">
        <WeatherConditions weather={forecast} />
      </main>
    </>
  );
};

export default Home;
