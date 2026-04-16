# Country Finder

A React application developed for **Full Stack Open (Part 2)** that retrieves country data and real-time weather information using external APIs.

## Features

- **Live Search**: Filters countries as you type
- **Smart Views**:
  - Shows a list with "Show" buttons if there are 2–10 matches
  - Automatically displays full details if only one country remains
  - Prompts for a more specific filter if over 10 results are found
- **Country Info**: Displays capital, area, languages, and the national flag
- **Weather Integration**: Fetches and shows current temperature, wind speed, and weather icons for the country's capital

## Components & Services

### Components

- **CountriesList.jsx**: Displays a list of countries with "Show" buttons for detailed view
- **CountryDetail.jsx**: Shows complete country information including capital, area, languages, and flag
- **weather.jsx**: Displays real-time weather data for the country's capital

### Services

- **countries.js**: Handles API calls to fetch country data
- **weather.js**: Manages OpenWeatherMap API integration for weather information

## Core Files


### Core Files

- **App.jsx**: Main component that manages application state and logic, handles search filtering and view transitions
- **main.jsx**: Entry point of the React application, renders the root App component

## Project Structure

```
countries/
├── src/
│   ├── components/
│   │   ├── CountriesList.jsx        # Country list component
│   │   ├── CountryDetail.jsx        # Country detail component
│   │   └── weather.jsx              # Weather display component
│   ├── services/
│   │   ├── countries.js             # Country API service
│   │   └── weather.js               # OpenWeatherMap API service
│   ├── App.jsx                      # Main logic and state
│   └── main.jsx                     # Entry point
├── .env                             # API Keys
└── package.json                     # Dependencies
```

## Setup

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)

2. Create a `.env` file in the root directory:

   ```
   VITE_OPENWEATHER_API_KEY=your_key_here
   ```

3. Install dependencies and run:
   ```bash
   npm install
   npm run dev
   ```
