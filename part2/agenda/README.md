# Phonebook Agenda

A React application developed for **Full Stack Open (Part 2)** that manages a contact directory with real-time synchronization to a local JSON database.

## Features

- **Live Search**: Filters contacts as you type
- **Add Contacts**: Create new contacts with name and phone number
- **Update Numbers**: Modify existing contact phone numbers with confirmation
- **Delete Contacts**: Remove contacts from the phonebook
- **Real-time Sync**: All changes persist in the JSON database backend
- **Data Persistence**: Contacts are stored and retrieved from `db.json` via JSON Server

## Components & Services

### Components

- **Filter.jsx**: Search input with filter functionality and clear button
- **PersonForm.jsx**: Form to add or update contact information
- **Person.jsx**: Individual contact card with delete functionality
- **Persons.jsx**: List view displaying all filtered contacts

### Services

- **Person.js**: Handles API calls to manage contact CRUD operations with axios

### Core Files

- **App.jsx**: Main component managing application state, form handling, and business logic
- **main.jsx**: Entry point of the React application

## Project Structure

```
agenda/
├── src/
│   ├── Components.jsx/
│   │   ├── Filter.jsx              # Search filter component
│   │   ├── PersonForm.jsx          # Form for adding/updating contacts
│   │   ├── Person.jsx              # Individual contact card
│   │   └── Persons.jsx             # Contact list component
│   ├── services/
│   │   └── Person.js               # Contact API service
│   ├── App.jsx                     # Main logic and state management
│   └── main.jsx                    # Entry point
├── db.json                         # Contact database
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
└── eslint.config.js                # ESLint rules
```

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the JSON Server backend (runs on `http://localhost:3001`):

   ```bash
   npm run server
   ```

3. In another terminal, start the development server (runs on `http://localhost:5173`):
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run server` - Start JSON Server for the backend
- `npm run lint` - Run ESLint validation
- `npm run preview` - Preview production build
