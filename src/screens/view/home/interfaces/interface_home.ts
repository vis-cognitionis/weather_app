interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface WeatherDatas {
  cod: string;
  message: number;
  cnt: number;
  list: Weather[];
  city: City;
}

export enum WeatherCondition {
  Clear = "Clear",
  Clouds = "Clouds",
  Drizzle = "Drizzle",
  Dust = "Dust",
  Fog = "Fog",
  Haze = "Haze",
  Mist = "Mist",
  Rain = "Rain",
  Sand = "Sand",
  Snow = "Snow",
  Squall = "Squall",
  Thunderstorm = "Thunderstorm",
  Tornado = "Tornado",
}
