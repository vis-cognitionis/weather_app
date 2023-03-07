import React from "react";
import { render } from "@testing-library/react-native";
import { useWeatherDatas } from "src/screens/view/common/queries/useWeatherDatas";

import WeatherAll from "src/screens/view/home/components/weather_all";

jest.mock("src/screens/view/common/queries/useWeatherDatas");

describe("WeatherAll component", () => {
  const mockWeatherData = {
    city: {
      timezone: 7200,
      sunrise: 1641608483,
      sunset: 1641641129,
    },
    list: [
      {
        dt: 1641626400,
        main: {
          temp: 7,
        },
        weather: [
          {
            icon: "01d",
            description: "clear sky",
          },
        ],
      },
      {
        dt: 1641637200,
        main: {
          temp: 8,
        },
        weather: [
          {
            icon: "01n",
            description: "clear sky",
          },
        ],
      },
      {
        dt: 1641648000,
        main: {
          temp: 9,
        },
        weather: [
          {
            icon: "02d",
            description: "few clouds",
          },
        ],
      },
    ],
  };

  beforeEach(() => {
    (useWeatherDatas as jest.Mock).mockReturnValue({
      isLoading: false,
      weatherDatas: mockWeatherData,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render WeatherAll component correctly", async () => {
    const { getByTestId } = render(<WeatherAll />);
    expect(getByTestId("weather-background")).toBeTruthy();
    expect(getByTestId("weather-current")).toBeTruthy();
    expect(getByTestId("hourly-weather")).toBeTruthy();
  });

  it("should render lazy loading component when weather data is loading", async () => {
    (useWeatherDatas as jest.Mock).mockReturnValueOnce({
      isLoading: true,
      weatherDatas: null,
    });

    const { getByTestId } = render(<WeatherAll />);
    expect(getByTestId("lazy-loading")).toBeTruthy();
  });
});
