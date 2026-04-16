Country Finder
A React application developed for Full Stack Open (Part 2) that retrieves country data and real-time weather information using external APIs.

Features
Live Search: Filters countries as you type.

Smart Views: \* Shows a list with "Show" buttons if there are 2–10 matches.

Automatically displays full details if only one country remains.

Prompts for a more specific filter if over 10 results are found.

Country Info: Displays capital, area, languages, and the national flag.

Weather Integration: Fetches and shows current temperature, wind speed, and weather icons for the country's capital.

Project Structure
Plaintext
countries/
├── src/
│ ├── components/
│ │ └── CountriesList.jsx # Country list component
│ │ └── CountryDetail.jsx # Country detail component
│ │ └── weather.jsx # Weather display component
│ ├── services/
│ │ ├── countries.js # Country API service
│ │ └── weather.js # OpenWeatherMap API service
│ ├── App.jsx # Main logic and state
│ └── main.jsx # Entry point
├── .env # API Keys
└── package.json # Dependencies
Setup
Get an API key from OpenWeatherMap.

Create a .env file in the root:
VITE_OPENWEATHER_API_KEY=your_key_here

Install and run:

Bash
npm install
npm run dev
