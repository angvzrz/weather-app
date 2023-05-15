import { Header } from '@/components/header';
import { WeatherConditions } from '@/components/weather-conditions';
import { getWeather } from '@/services/weather-api';
import { type NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import type { IWeather } from 'types/types';

const Home: NextPage = () => {
  const [forecast, setForecast] = useState<IWeather>();

  useEffect(() => {
    const lastSearch: string | null = localStorage.getItem('lastSearchQuery');
    let initialCity = 'london';

    if (lastSearch) {
      initialCity = lastSearch;
    }

    getWeather(initialCity)
      .then((response) => setForecast(response))
      .catch((error) => console.error(error));
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
      <Header setForecast={setForecast} />
      <main className="container mx-auto flex flex-wrap px-5 py-16">
        {forecast && <WeatherConditions weather={forecast} />}
      </main>
    </>
  );
};

export default Home;
