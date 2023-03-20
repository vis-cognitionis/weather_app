# Weather App

A cross-platform mobile application developed with React Native that displays weather information for a given city.

## Installation

To install and run the app on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/vis-cognitionis/weather_app.git`
2. Install dependencies: `npm install`
3. Run the app on an emulator or device: `npm run android` or `npm run ios`

## Technologies 

<li> <a href="https://reactnative.dev/" target="_blank">React Native</a></li> 
<li> <a href="https://beta.reactjs.org/" target="_blank">React</a></li> 
<li> <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> </li> 
<li> <a href="https://openweathermap.org/" target="_blank">OpenWeather API (Current Weather & 3-hour Forecast 5 days)</a> </li> 
<li> <a href="https://reactnavigation.org/" target="_blank">React Navigation</a> </li> 
<li> <a href="https://tanstack.com/query/latest" target="_blank">TanStack React Query</a> </li> 
<li> <a href="https://mobx.js.org/" target="_blank">MobX</a> </li>

## Project Structure

The project is organized into the following directories:

- `assets`: Contains static assets, such as images and fonts
- `src`: Contains the source code for the app
- `core`: Contains language, query and theme initial structures with reusable UI components and all icons in the app
- `images`:Contains background images for the app
- `navigation`:Contains components that allow pages within the app to be navigated
- `screens`: Contains the main screens for the app

## Dependencies

The app uses the following dependencies:

- `react`: A JavaScript library for building user interfaces
- `react-native`: A framework for building native apps using React
- `axios`: A library for making HTTP requests
- `react-navigation`: A library for managing navigation between screens
- `react-native-chart-kit`: A library used to create charts in React Native
- `react-native-restart`: A library used to restart a React Native app
- `mobx`: A library used for state management in JavaScript app
- `tanstack/react-query`: A library used for data management and sharing in React applications, providing many features for data management
- `react-native-svg`: A library used to create vector graphics such as icon in React Native

## Project Overview

This weather application has been developed using React Native and can be used on both iOS and Android devices. It provides users with accurate and up-to-date weather information in a simple and user-friendly way. Upon opening the application, users are greeted with a splash screen that quickly transitions into the landing screen, which displays the default city of Istanbul.

The home screen displays the current weather in the selected city, with a clean and modern design that includes large and easy-to-read fonts and icons. Users can access 3-hourly weather information with the help of various images and icons that provide a fun and engaging experience. The screen also includes helpful and humorous messages, giving users advice on how to prepare for the day's weather.

The detail screen provides users with more in-depth weather information, such as wind direction, pressure, and other meteorological data. The 3-hourly data is displayed in a chart format, allowing users to visualize temperature changes throughout the day quickly. The lowest and highest temperature data is also shown, with 5-day forecast data located below.

In the settings section, users can customize their experience by changing their default city, language (English or Turkish), status bar, and temperature unit settings. This feature ensures that users do not have to repeatedly set their preferences every time they use the application.

One of the most significant advantages of this weather application is its use of the openWeather API, which provides accurate and reliable weather data. Users can feel confident in the accuracy of the information provided by the application, making it an essential tool for planning their day.

Overall, this weather application is a valuable tool for anyone who wants to stay informed about the weather conditions in their area. Its intuitive design, customizable settings, and reliable data make it a top choice for users who want a simple and effective way to check the weather. With its cross-platform compatibility and useful features, this weather application is sure to be a popular choice for users worldwide.

## Screenshots

Here are some example screenshots and video of the app:

<div align="center">
  <video src="https://user-images.githubusercontent.com/108089138/225416202-14a1f6c0-1677-477e-a232-64ee628cfb9e.mp4" type="video/mp4"
  </video>
 
</div>

<div align="center">
 <br>
  <em>Video on general usage of the app</em>
  <br>
  <br>
</div>
  

<div align="center">
  <img src="assets/images/cross_platform.png" width="500" height="auto">
  <br>
  <em>Landing page of Weather App running on one iOS and one Android</em>
</div>
  <br>
  <br>

<div align="center">
  <img src="assets/images/weather_1.png" width="500" height="auto">
  <br>
  <em>Clear and cloudy weather conditions from the Home screen</em>
</div>
  <br>
  <br>

<div align="center">
  <img src="assets/images/weather_2.png" width="500" height="auto">
  <br>
  <em>Rainy and snowy weather conditions from Home screen</em>
</div>
  <br>
  <br>

<div align="center">
  <img src="assets/images/detail.png" width="500" height="auto">
  <br>
  <em>Other information and chart on the Detail screen are available in two different themes as light and dark</em>
</div>
  <br>
  <br>

<div align="center">
  <img src="assets/images/settings.png" width="500" height="auto">
  <br>
  <em>Settings screen overview and default city change modal screen</em>
</div>
  <br>
  <br>

<div align="center">
  <img src="assets/images/others.png" width="500" height="auto">
  <br>
  <em>Lazy loading screen with warning screen when there is no network connection</em>
</div>

## License
All software and libraries used in this project are either open source or used with permission, and the intellectual property rights to the source code and related materials belong solely to the creator of this project. This project is for informational purposes only and is not intended for commercial use.
