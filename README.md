# PrimeAssignment – Full Stack Application

This repository contains a complete **full-stack web application** built as part of the assignment.  
It includes a **secure backend REST API** with authentication and role-based access control, along with a **React frontend** to interact with the APIs.

---

##  Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- Express Validator

### Frontend
- React (Vite)
- Material UI (MUI)
- Axios
- React Router

---

##  Project Structure

PrimeAssignment/
├── backend/ # Backend APIs
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── models/
│ │ ├── middlewares/
│ │ ├── validators/
│ │ ├── utils/
│ │ └── server.js
│ ├── config/
│ │ └── db.js
│ ├── package.json
│ ├── .env.example
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── api/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ ├── vite.config.js
│ ├── .env.example
│
├── README.md # Root documentation
└── .gitignore


---

##  Features

### Authentication & Authorization
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Role-Based Access Control (User / Admin)

### User Features
- Register & Login
- Protected dashboard
- Create, view, update, and delete tasks
- JWT-secured API access

### Admin Features
- Admin-only dashboard
- View total users
- View user name and email
- Delete non-admin users
- Backend-enforced role protection

### Security & Validation
- Input validation on frontend and backend
- Secure JWT handling using Authorization headers
- Protected routes using middleware
- Email format and password length validation

---

##  API Usage

- APIs follow REST principles
- Versioned routes (`/api/v1`)
- JWT must be sent in request headers:

## Backend runs on
http://localhost:5000

## Admin Credentials
Email: admin@test.com
Password: admin123


## Backend env
PORT=5000
MONGO_URI=mongodb://localhost:27017/primeassignment
JWT_SECRET=supersecretkey

## Frontend env
VITE_API_URL=http://localhost:5000/api/v1

## Project Flow

User registers using the Register page.

After successful registration, the user is redirected to the Login page.

On login, the backend authenticates the user and returns a JWT token.

The frontend decodes the token to identify the user role:

User → redirected to User Dashboard

Admin → redirected to Admin Dashboard

All dashboards and APIs are protected using JWT authentication and role-based access control.






