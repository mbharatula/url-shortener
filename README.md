# URL Shortener

A full-stack URL shortening application built using the MERN stack. The application allows users to create, manage, and track shortened URLs through a personalized dashboard. It also includes secure authentication features such as email verification and password recovery.

## Features

- User registration and login using JWT authentication
- Email verification using Nodemailer
- Forgot password and password reset functionality
- Create shortened URLs
- Custom short aliases
- Click analytics for each URL
- Personal dashboard for URL management
- Copy shortened links directly from the dashboard
- Secure password hashing using bcrypt
- Deployed using MongoDB Atlas, Render, and Vercel

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Nodemailer

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## Project Structure

```text
url-shortener/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/url-shortener.git

cd url-shortener
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_google_app_password

FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## Authentication Flow

### Registration

1. User registers using name, email, and password.
2. Verification email is sent to the registered email address.
3. User clicks the verification link.
4. Account is marked as verified.
5. User can log in.

### Password Reset

1. User clicks "Forgot Password".
2. Password reset email is sent.
3. User opens the reset link.
4. New password is submitted.
5. User can log in using the updated password.

---

## URL Shortening Flow

1. User logs in.
2. Long URL is submitted.
3. Optional custom alias can be provided.
4. Short URL is generated and stored.
5. Every visit updates click statistics.
6. URLs can be managed from the dashboard.

---

## Screenshots

### Home Page

Add screenshot here.

### Login Page

Add screenshot here.

### Dashboard

Add screenshot here.

---

## Future Improvements

- QR code generation for shortened URLs
- Link expiration support
- Advanced analytics dashboard
- Dark mode
- User profile management
- Search and filter URLs

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

- REST API development
- JWT authentication
- Password hashing and security practices
- Email workflows using Nodemailer
- MongoDB schema design
- MERN stack integration
- Deployment using Vercel and Render
- Environment variable management
- Full-stack application architecture

---

## Author

Built as a personal project to explore full-stack web development using the MERN stack and gain practical experience with authentication, deployment, and production-style application workflows.
