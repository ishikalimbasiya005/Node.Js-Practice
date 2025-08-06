# 📁 MongoDB + Express + Multer API

This project demonstrates how to build a simple API using **Express.js**, **MongoDB**, and **Multer** for handling image uploads.

---

## ✅ Requirements

- Node.js
- MongoDB (running locally on `mongodb://localhost:27017`)
- Postman or any REST API client (for testing)
- An `upload` folder (already contains sample images)

---

## 📦 Installation

Use the following command to install required packages:

```bash
npm install express mongodb multer
```

---

## 🗃️ MongoDB Setup

- Create a database: `first`
- Create a collection: `mydemos`
- Use MongoDB Compass or MongoDB Shell to perform the setup

---

## 🚀 How to Run

- Start the server using the terminal:
```bash
node multer.js
```

- Access the server at:
```bash
http://localhost:5070
```
- Use Postman or a browser to test the API endpoints

---

## 🔧 Project Structure
```
project/
├── multer.js              # Main API file
├── sortcut.js             # MongoDB connection file
├── upload/                # Folder for storing uploaded images
├── package.json
└── node_modules/
```

---

## 📬 API Features

- Connects to MongoDB
- Accepts form-data with image upload
- Stores image name and form fields in MongoDB
- Displays stored documents with image data

---

## 📘 Notes

- The `upload/` folder must exist for file uploads to work
- Uploaded image filenames are saved in the database
- Ensure MongoDB service is running before starting the server
