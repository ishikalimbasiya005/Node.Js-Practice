# 🚀 MongoDB + Express.js CRUD API

A RESTful API project using **Node.js**, **Express.js**, and **MongoDB** to perform basic **CRUD operations**.

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB
- MongoDB Native Driver

---

## 📁 Project Structure
```
├──  `Connect_MongoDb/sortcut.js` — MongoDB connection setup file
├──  `API.js` — Main server file containing all routes
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 📁 Project Setup

### 1. Initialize the project
Use this command to create `package.json` file:
```bash
npm init -y
```

### 2. Install Required Package
```npm install express mongodb```

#### This creates:
- node_modules/ — contains all installed packages
- package-lock.json — locks versions of installed dependencies

---

## 🗃️ MongoDB Setup

- Before running the project, ensure MongoDB is installed and running.
- Create a database named: `first`
- Inside the database, create a collection named: `mydemos`
- You can use MongoDB Shell or MongoDB Compass for this setup.

---

# 🧾 Run the Project

- Start the server using the terminal command.
```bash
node API.js
```

- The server will run at the specified local URL.
```bash
http://localhost:5070
```

- Endpoints can be tested using:
  - Browser (for GET requests only)
  - Postman (for complete API testing)
    
---

# 📬 API Endpoints

- **GET /** — Retrieve all documents from the collection.

- **POST /** — Insert a new document into the collection.

- **PATCH /** — Update an existing document in the collection.

- **DELETE /** — Delete a document from the collection.

- **GET /search/:key** — Search for documents based on a dynamic key.
