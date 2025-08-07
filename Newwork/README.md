# 🚀 User Authentication & CRUD API (Node.js + Express + MongoDB)

A RESTful API built using **Express.js**, **Mongoose**, **JWT**, and **bcrypt** that supports user registration, login, authentication token generation, and basic CRUD operations.

---

## 📁 Folder Structure
```
project/
│
├── dbconnect.js # MongoDB connection logic
├── index.js # Entry point of the app (Express server)
├── user.js # Mongoose schema/model
├── userlogic.js # All business logic (CRUD + Auth)
├── userroute.js # Express routes
├── package.json
├── package-lock.json
├── node_modules/
```



---

## ⚙️ Tech Stack

- **Node.js** – Server-side runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **bcrypt** – Password hashing
- **jsonwebtoken (JWT)** – Token-based authentication

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd project
   ```

2. **Initialize and install dependencies**
```bash
npm init -y
npm install express mongoose bcrypt jsonwebtoken
```

3. **Run the app**
```bash
node index.js
```

---

## 🌐 Where does it run?
It runs locally on your machine(postman , firefox), so the full URL is:
```bash
http://localhost:3030
```

---

## 🔍 API Testing (Definition)

**API Testing** is a type of software testing that focuses on verifying whether an application's API endpoints work as expected. It checks functionalities like:

- Data creation (POST)
- Data retrieval (GET)
- Data update (PATCH/PUT)
- Data deletion (DELETE)
- Authentication & authorization

It ensures the backend logic is correct, secure, and reliable—often tested using tools like **Postman**.
