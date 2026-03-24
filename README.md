#📝 MyBlogs: Full-Stack Blogging Platform


A full-stack blogging platform built with the MERN stack, featuring secure authentication, admin controls, AI-powered content generation, and cloud-based media handling.

🌐 **Live Demo:** https://myblogs-puce.vercel.app/

---

## 📌 Features

- 🔐 JWT Authentication – Secure login & protected routes  
- 📝 Blog Management – Create, edit, delete blogs  
- 🤖 AI Blog Generator – Generate content using Gemini API  
- 🖼️ Image Upload – Optimized cloud uploads via ImageKit  
- 💬 Comment System – User interaction on blogs  
- 👨‍💼 Admin Dashboard – Manage blogs and comments  
- ⚡ Fast UI – Built with React + Vite  
- 🧱 Scalable Backend – MVC architecture with REST APIs  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Vite  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  

### Tools & Services
- JWT (Authentication)  
- Multer (File handling)  
- ImageKit (Cloud storage)  
- Gemini API (AI content)  

---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/your-username/blog-app.git

cd blog-app


---

### 2️⃣ Setup Backend

cd server
npm install


Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
GEMINI_API_KEY=your_api_key


Run backend:

npm run dev


---

### 3️⃣ Setup Frontend

cd client
npm install
npm run dev


---

## 🔐 Environment Variables

| Variable | Description |
|--------|------------|
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT |
| IMAGEKIT_* | ImageKit credentials |
| GEMINI_API_KEY | AI API key |

---

## 🧠 Architecture

- MVC pattern  
- RESTful API design  
- Middleware-based authentication  
- Cloud storage integration  
- Modular folder structure  

---

## 🚀 Deployment

- Frontend: Vercel  
- Backend: (Add your deployed backend link here)  

---

## 📈 Future Improvements

- 🔍 Search & filter blogs  
- 📄 Pagination  
- ❤️ Like & view system  
- 🚫 Rate limiting  
- 📊 Analytics dashboard  

---

## 👨‍💻 Author

Deva Yadav  

---


