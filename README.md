Full Stack User Form Submission App
===================================

A simple full stack web application to collect user details through a React form, save them to MongoDB via a Node.js + Express backend, and display a confirmation to the user.
---

🚀 Features
-----------
✅ React frontend with form  
✅ Node.js + Express backend  
✅ MongoDB database for storage  
✅ Plain CSS styling  
✅ Confirmation message after submission

---

🛠️ Tech Stack
--------------
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Styling: Plain CSS

---

📂 Project Structure
--------------------
fullstack-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   ├── package.json
│   └── node_modules/

---

🖥️ Setup Instructions
----------------------

### 🔷 Prerequisites
✅ Node.js installed  
✅ MongoDB installed & running (`mongod`)  
✅ npm (comes with Node.js)

### 🔷 Clone the repository
git clone <your-repo-url>
cd fullstack-app

### 🔷 Backend Setup
cd backend
npm install
npm start

✅ Backend runs at: http://localhost:5000

### 🔷 Frontend Setup
cd frontend
npm install
npm start

✅ Frontend runs at: http://localhost:3000

---

🗃️ Database
------------
- MongoDB is used to store submitted form data.
- Database: mydb
- Collection: formdatas
- You can view submissions in MongoDB Compass or with:

mongosh
use mydb
db.formdatas.find().pretty()

