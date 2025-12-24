# Zerodha Clone

A full-stack web application inspired by Zerodha, designed to simulate a real-world trading platform with secure authentication and a protected user dashboard.

---

## 🚀 Features

- User Signup & Login using JWT Authentication  
- Protected Dashboard accessible only to authenticated users  
- Modules:
  - Dashboard Overview  
  - Orders  
  - Holdings  
  - Positions  
  - Funds  
- Secure Logout functionality  
- RESTful API integration  

---

## 🛠 Tech Stack

### Frontend (Landing Page)
- React
- React Router
- Axios
- HTML, CSS, Bootstrap

### Dashboard
- React
- React Router
- Axios
- JWT-based route protection

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js

---

## 🔐 Authentication Flow

1. User signs up or logs in from the frontend.
2. Backend validates credentials and generates a JWT.
3. Token is stored on the client.
4. Dashboard verifies the token via a protected API.
5. Unauthorized access redirects to the login page.


