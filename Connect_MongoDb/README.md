# MongoDB Node.js CRUD Project

This project shows how to connect Node.js with MongoDB and perform basic CRUD operations.

---

## 📘 File Structure
```
project/
├── app.js            # Main file to perform operations
├── sortcut.js        # MongoDB connection file
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
```npm install mongodb```

#### This creates:
- node_modules/ — contains all installed packages
- package-lock.json — locks versions of installed dependencies

---

## 🗃️ MongoDB Setup
Before running the project, create:
Database: first
Collection: mydemos
You can use MongoDB shell or Compass.

---

## 🔧 Requirements

- Node.js installed
- MongoDB installed and running on `localhost:27017`

---

# 🧾 Run the Project

### Step-by-step:

1. **Start the server**
Open your terminal and run the following command:
```bash
node API.js
```

2. **Access the API**
In Firefox, open:
```http://localhost:5070 ```

In Postman, use the same URL:
```http://localhost:5070```
Make sure to set the request method to GET and then click Send.

---

# 🔑 CRUD Definitions

- **Create (`insertOne`)** — Add a document
- **Read (`find`)** — Retrieve documents
- **Update (`updateOne`)** — Modify a document
- **Delete (`deleteOne`)** — Remove a document

---

## 📘 Note

- All MongoDB actions are performed asynchronously using async/await.
- Ensure MongoDB is running on port `27017`.

---

