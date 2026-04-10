# MERN CRUD App 🚀

A full-stack MERN (MongoDB, Express, React, Node.js) application that performs basic CRUD (Create, Read, Update, Delete) operations.

---

## 📌 Features

* ➕ Create new messages
* 📖 Read all messages
* ❌ Delete messages
* 🌐 REST API using Express
* 🗄️ MongoDB (Local) database integration
* ⚛️ React frontend

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB (Local)
* Tools: Git, GitHub

---

## 📁 Project Structure

```
mern-task1/
 ├── client/        # React frontend
 ├── server/        # Node + Express backend
 ├── .gitignore
 └── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Clone Repository

```
git clone https://github.com/shambhavi122004/mern-task1.git
cd mern-task1
```

---

### 🔹 Backend Setup

```
cd server
npm install
node server.js
```

Server runs on:

```
http://localhost:7000
```

---

### 🔹 Frontend Setup

Open new terminal:

```
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description  |
| ------ | -------- | ------------ |
| GET    | /api/all | Get all data |
| POST   | /api     | Create data  |
| PUT    | /api/:id | Update data  |
| DELETE | /api/:id | Delete data  |

---

## 🧪 Example Request (POST)

```
POST /api
```

Body:

```
{
  "message": "Hello MERN 🚀"
}
```

---

## 📸 Screenshots

(Add screenshots of your project here)

---

## 🚀 Future Improvements

* ✏️ Add update feature in UI
* 🎨 Improve UI styling
* 🌍 Deploy project online

---

## 👩‍💻 Author

**Shambhavi Swaroop**

GitHub: https://github.com/shambhavi122004

---

## ⭐ Acknowledgement

This project is built for learning and practicing MERN stack development.
