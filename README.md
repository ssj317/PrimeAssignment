# PrimeAssignment – Full Stack Application

This repository contains both the backend and frontend for the assignment.

## Tech Stack
- Backend: Node.js, Express, MongoDB, JWT
- Frontend: React (Vite), Material UI

## Folder Structure
- `/backend` – REST APIs, authentication, RBAC
- `/frontend` – React UI for users and admins

## Features
- User registration & login
- JWT authentication
- Role-based access (Admin/User)
- CRUD operations on tasks
- Admin dashboard to manage users
- Input validation and error handling

## Run Locally

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
