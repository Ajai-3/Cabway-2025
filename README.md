# CabWay

A real-time ride-hailing platform inspired by Uber, connecting riders with nearby drivers (captains). Users can book rides, track their driver's location live on Google Maps, and pay seamlessly. Captains can register their vehicles, receive ride requests, and navigate to pick-up and drop-off locations.

---

## Tech Stack

### Backend

![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-003A70?style=for-the-badge&logo=lock&logoColor=white)

- **Runtime:** Node.js with ES Modules
- **Framework:** Express 5
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (Bearer header / HTTP-only cookie) with token blacklisting
- **Password Hashing:** bcrypt
- **Validation:** express-validator
- **Middleware:** cors, cookie-parser, body-parser
- **Environment:** dotenv

### Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

- **UI Library:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3 with PostCSS & Autoprefixer
- **Routing:** react-router-dom 7
- **Notifications:** react-hot-toast
- **Linting:** ESLint with React Hooks & React Refresh plugins

---

## Features

- **Live GPS tracking** -- Real-time location sharing using Google Maps API; riders can watch their captain approach on the map
- **User (Rider) authentication** -- register, login, profile, logout
- **Captain (Driver) authentication** -- register, login, profile, logout
- **Flexible login** -- sign in via email or phone number
- **JWT-based security** -- tokens via Bearer header or HTTP-only cookie
- **Token blacklisting** -- secure logout with MongoDB TTL-based expiration
- **Vehicle registration** -- captains register car, motorcycle, or auto-rickshaw
- **Indian phone validation** -- 10-digit mobile number format support
- **Responsive UI** -- Tailwind CSS powered frontend

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB instance (local or Atlas)
- Google Maps API key (for live location features)

### Backend Setup

```bash
cd Backend
npm install
cp .env.example .env   # configure PORT and DB_CONNECT
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## Environment Variables

| Variable    | Description                       |
|-------------|-----------------------------------|
| PORT        | Backend server port               |
| DB_CONNECT  | MongoDB connection URI            |

---

## Project Structure

```
CabWay-2025/
  Backend/
    server.js              -- Entry point
    app.js                 -- Express app configuration
    db/db.js               -- MongoDB connection
    models/                -- Mongoose schemas
    routes/                -- API route definitions
    controllers/           -- Business logic
    middlewares/           -- Auth middleware (JWT)
    services/              -- Data access layer
    utils/                 -- HTTP status constants
  Frontend/
    src/
      pages/               -- Page components
      components/          -- Shared UI components
      App.jsx              -- Route definitions
      main.jsx             -- React entry point
```

---

## License

This project is for educational/demonstration purposes.
