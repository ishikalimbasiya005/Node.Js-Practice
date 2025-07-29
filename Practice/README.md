# 🌈 Node.js Basic Setup with Colors and Utility Info

This project demonstrates how to:

- Initialize a Node.js project
- Use `colors` package for styled terminal output
- Display current file and directory names
- Automatically run programs using `nodemon`

---

## 🚀 Installation Commands

Use the following commands to set up your Node.js environment:

```bash
# Initialize package.json file quickly
npm init -f

# Install all dependencies from package.json
npm i

# Install 'colors' package to style terminal text
npm i colors

# Install nodemon globally to auto-run files on changes
npm i nodemon -g
```
---

## ▶️ How to Run
```
node filename.js
# or
nodemon filename.js
```
---

## 📁 Notes

- The `colors` package helps in adding **background** and **foreground** colors to console logs.
- `__dirname` returns the **absolute path** of the current directory.
- `__filename` returns the **absolute path** of the current file.
- Use `nodemon` to **automatically restart** your script when file changes are detected.
