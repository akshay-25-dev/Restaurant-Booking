# 🍽️ Akshay's — Restaurant Booking

A full-stack restaurant reservation web application built with **React** and **Express.js**. Customers can browse the restaurant's menu, learn about the team, and make table reservations — all from a sleek, responsive single-page interface. The backend stores reservations in **MongoDB** and is deployed on **Vercel** as a serverless function.

> **Live:** [[restaurant-booking-4pkg.vercel.app](https://restaurant-booking-orpin.vercel.app/)]

---

## ✨ Features

- **Hero Section** — Eye-catching landing with smooth scroll navigation
- **About & Qualities** — Highlights the restaurant's story and what makes it stand out
- **Menu Showcase** — Browse dishes with details pulled from a local data source
- **Team Section** — Meet the people behind the restaurant
- **Online Reservation** — Fill in a form (name, email, phone, date & time) to book a table
- **Success Page** — Confirmation screen after a reservation is placed
- **Toast Notifications** — Real-time feedback via `react-hot-toast`
- **Responsive Design** — Mobile-friendly with a hamburger menu
- **404 Page** — Custom "Not Found" page for unmatched routes
- **Serverless Deployment** — Backend runs as a Vercel serverless function

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI library |
| Vite 8 | Build tool & dev server |
| React Router v7 | Client-side routing |
| Axios | HTTP requests to the API |
| React Hot Toast | Toast notifications |
| React Icons | Icon library |
| React Scroll | Smooth scroll navigation |

### Backend
| Technology | Purpose |
|---|---|
| Express 5 | Web framework |
| Mongoose 9 | MongoDB ODM |
| Validator | Email & input validation |
| dotenv | Environment variable management |
| CORS | Cross-origin resource sharing |

### Infrastructure
| Service | Purpose |
|---|---|
| MongoDB Atlas | Cloud database |
| Vercel | Hosting & serverless functions |

---

## 📁 Project Structure

```
restaurant-booking/
├── backend/
│   ├── api/
│   │   └── index.js              # Vercel serverless entry point
│   ├── config/                    # Environment config (config.env)
│   ├── controller/
│   │   └── reservation.js        # Reservation business logic
│   ├── database/
│   │   └── dbConnection.js       # MongoDB connection setup
│   ├── error/
│   │   └── error.js              # Custom ErrorHandler & middleware
│   ├── models/
│   │   └── reservationSchema.js  # Mongoose schema for reservations
│   ├── Routes/
│   │   └── reservationRoute.js   # Express router
│   ├── app.js                    # Express app configuration
│   ├── server.js                 # Local dev server entry
│   └── package.json
│
├── frontend/
│   ├── public/                   # Static assets (images)
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── WhoAreWe.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Main landing page
│   │   │   ├── NotFound.jsx      # 404 page
│   │   │   └── Success.jsx       # Reservation confirmation
│   │   ├── App.css               # Global styles
│   │   ├── App.jsx               # Root component with routing
│   │   ├── main.jsx              # React DOM entry point
│   │   └── restApi.json          # Static data (navbar links, menu items)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── vercel.json                   # Vercel deployment configuration
└── README.md
```
