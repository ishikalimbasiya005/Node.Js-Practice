# 🗃️ MongoDB + Express CRUD API

A simple RESTful API built with **Express.js** and **Mongoose** for managing user data (name, email, password).

## Folder Structure
```
my-crud-api/
│
├── node_modules/           # Installed dependencies
├── index.js                # Main server file (Express + MongoDB logic)
├── package.json            # Project metadata & dependency list
├── package-lock.json       # Exact versions of installed packages (auto-generated)
```

---

## 📦 Setup

1. Install dependencies:
```bash
npm install express mongoose
npm init -y
```

2. Run the server:
```bash
node index.js
```

---

## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime for server-side logic  
- **Express.js** – Web framework for building REST APIs  
- **MongoDB** – NoSQL database for storing user data  
- **Mongoose** – ODM for MongoDB to interact with the database using models

---

## 📝 Notes

- Runs on: `http://localhost:5040`
- Ensure MongoDB is running at: `mongodb://127.0.0.1:27017/student`
- Use **Postman** to test API endpoints:
  - Set `Content-Type: application/json` in headers for POST and PATCH requests
  - Use raw JSON format in request body
- Make sure MongoDB is started (`mongod`) before running the Node server

