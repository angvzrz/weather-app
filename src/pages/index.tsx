import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      <main className="flex min-h-screen flex-col items-center justify-center"></main>
    </>
  );
};

export default Home;
