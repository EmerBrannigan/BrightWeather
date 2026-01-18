# BrightWeather

A weather application that allows users to search for weather information by city name. The app fetches real-time weather data from the OpenWeatherMap API and displays temperature, weather conditions, and other relevant information.

## Features

- 🔍 Search weather by city name
- 🌍 Support for multiple countries
- 🌡️ Display current temperature and weather conditions
- ❌ Error handling for invalid cities
- 🧪 Comprehensive unit tests for components

## Prerequisites

Before you begin, ensure you have the following installed:
run this command to confirm whether you have node.js installed:
node -v npm -v

If you do not have it installed, complete these steps:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Then run this command to confirm that you have installed node.js:
node -v npm -v

## Getting Started

### 1. Clone the Repository

git clone <repository-url>
cd BrightWeather/BrightWeather

### 2. Install Dependencies

npm install

### 3. Obtain an OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Click on "Sign Up" and create a free account
3. Verify your email address
4. Go to your [API keys page](https://openweathermap.org/api/account)
5. Copy your API key (you'll find it under "API keys" section)

### 4. Setup Environment Variables

Create a `.env` file in the project root (same directory as `package.json`):

*** Look at .env.example to understand the format for the .env file ***

Edit `.env` and add your API key:

VITE_WEATHER_API_KEY=your_api_key_here

**Important:** Remove any quotes around your API key. The value should be just the key itself.

### 5. Run the Development Server

npm run dev

The application will start at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint to check code quality

## Project Structure

src/
├── API/
│   └── WeatherApi.js          # API calls to OpenWeatherMap
├── Components/
│   ├── SearchBar.jsx          # Search input component
│   ├── WeatherCard.jsx        # Weather display component
│   └── ErrorMessage.jsx       # Error notification component
├── Pages/
│   ├── HomePage.jsx           # Landing page
│   └── WeatherPage.jsx        # Main weather page
├── App.jsx                    # Main app component
└── main.jsx                   # Application entry point


## Troubleshooting

### "Cannot read property 'WEATHER_API_KEY' of undefined"
- Make sure your `.env` file exists and is in the root directory
- Verify the environment variable is named `VITE_WEATHER_API_KEY` (with the `VITE_` prefix)
- Restart your dev server after creating/updating the `.env` file

### 401 Unauthorized Error
- Double-check your API key is correct
- Make sure you've verified your email with OpenWeatherMap
- Your API key may take a few minutes to become active after creating it

### Port 5173 Already in Use
- The dev server will automatically use the next available port
- Or you can specify a custom port: `npm run dev -- --port 3000`

## Testing

Run the test suite:

npm run test

Tests cover:
- Component rendering and user interactions
- Search functionality with valid and invalid cities
- Error message display
- API integration scenarios

## Built With

- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather data provider
- [Vitest](https://vitest.dev/) - Unit testing framework
- [React Testing Library](https://testing-library.com/react) - Component testing utilities
