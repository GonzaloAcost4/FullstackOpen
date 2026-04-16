# Course Info

A React application developed for **Full Stack Open (Part 2)** that displays course information with a dynamic, component-based architecture.

## Features

- **Modular Course Display**: Shows course structure with headers, content, and course details
- **Dynamic Parts Management**: Renders course parts with individual exercises
- **Exercise Tracking**: Displays and totals exercises per course
- **Responsive Layout**: Clean, organized presentation of course information
- **Reusable Components**: Modular component structure for easy maintenance and scaling

## Components

- **Header.jsx**: Displays the course title and header information
- **Content.jsx**: Main container that manages and displays all course parts
- **Course.jsx**: Individual course component handling course-specific data
- **Parts.jsx**: Renders course parts with their respective exercises
- **Total.jsx**: Calculates and displays the total number of exercises

## Core Files

- **App.jsx**: Main component that manages application state and orchestrates component structure
- **main.jsx**: Entry point of the React application, renders the root App component

## Project Structure

```
courseinfo/
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Course header component
│   │   ├── Content.jsx              # Main content manager
│   │   ├── Course.jsx               # Course component
│   │   ├── Parts.jsx                # Course parts display
│   │   └── Total.jsx                # Exercise total counter
│   ├── App.jsx                      # Main logic and state
│   └── main.jsx                     # Entry point
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint rules
└── package.json                     # Dependencies
```

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Technologies Used

- **React**: UI library for building interactive components
- **Vite**: Fast build tool and dev server
- **ESLint**: Code quality and consistency

---

Part of the **Full Stack Open** course series
