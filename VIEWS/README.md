# Node.js + Express + EJS Template Project

This is a simple project demonstrating how to use HTML, CSS, and EJS templates with Node.js and Express.

---

## 📁 Folder Structure
```
project-folder/
├── app.js
├── views/
│ └── index.ejs
├── STATIC/
│ └── style.css
├── package.json
├── package-lock.json
├── node_modules
```
#### Run Command Automatically Installed package.json, package-lock.json, node_modules
```bash
npm install init
npm install express ejs
```

---

## 🚀 How to Run This Project

### 1. Clone or Download the Project

If you've received this as a `.zip`, extract it and open in your terminal.

---

### 3.Start the Server
```bash
node app.js
```
Server will run on:
```http://localhost:3000 ```

---

## 🔧 Tech Stack

- Node.js  
- Express.js  
- EJS (Embedded JavaScript Templates)  
- HTML & CSS

## 🧠 Notes

- `index.ejs` is placed inside the `views` folder (required by Express).
- CSS is served from the `STATIC` folder using Express static middleware.
- CSS file is linked in `index.ejs` as:
```<link rel="stylesheet" href="/static/style.css">```

---

## 📦 Dependencies
```
"express": "^4.x",
"ejs": "^3.x"
```


