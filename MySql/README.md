# Node.js + MySQL CRUD API

This project provides a simple RESTful API using **Node.js**, **Express.js**, and **MySQL** to perform basic **CRUD (Create, Read, Update, Delete)** operations.

## Files

## 📘 File Structure
```
project/
├── index.js          # Establishes connection with the MySQL database.
├── demo.js           # Defines CRUD API routes and runs the Express server.
├── package.json
├── package-lock.json
└── node_modules/
```

## Requirements

- Node.js
- XAMPP (for MySQL & phpMyAdmin)
- MySQL Database

## What is XAMPP?

XAMPP is a free software package that includes:
- Apache (Web Server)
- MySQL (Database Server)
- PHP
- phpMyAdmin (Database Management via browser)

It allows developers to run a local web server environment for development and testing purposes.

## What is MySQL?

MySQL is an open-source relational database management system used to store and manage structured data. It is widely used in web development and backend systems.

## Setup Steps

1. Install and run XAMPP.
2. Start Apache and MySQL services from the XAMPP Control Panel.
3. Open `phpMyAdmin` in your browser (`http://localhost/phpmyadmin`).
4. Create a database named `student`.
5. Create a table named `demo` with suitable columns like `id`, `name`, `email`, `password`.
6. Install project dependencies using:
```bash
npm install express mysql
npm install init -y 
```
7. Start the Node.js server:
```bash
node demo.js
```

---


## Server Info

- Server runs on: **http://localhost:1020**
- API supports: **POST**, **GET**, **DELETE**, and **PATCH** operations on the `demo` table.

## Note

- Ensure MySQL service is running before launching the app.
- Use Postman or any API testing tool to send requests to the server.

