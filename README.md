# 🚀 Fullstack Task Manager (MERN)

A **Cloud-Based Task Manager** built with the **MERN stack** to streamline team task management. This application provides a **user-friendly interface** for efficient **task assignment, tracking, and collaboration**. Designed for **both administrators and regular users**, it enhances productivity and organization.

---

## 📌 Why This Project?

In today's dynamic work environment, **efficient task management** is crucial for team success. Traditional tracking methods (spreadsheets, manual notes) can be **inefficient and error-prone**.  
This **Cloud-Based Task Manager** provides a **centralized solution**, ensuring **seamless collaboration, improved workflow efficiency, and enhanced communication**.

---

## 🔍 Background  

With the rise of **remote work and distributed teams**, there is a **growing need** for tools that facilitate **effective communication and task coordination**.  

This project leverages **modern web technologies** to provide an **intuitive and responsive task management solution**.  
- The **MERN stack** ensures **scalability and performance**.  
- **Redux Toolkit, Headless UI, and Tailwind CSS** improve the **user experience**.  

---

## ✨ Features  

### 👨‍💼 Admin Features:
- **User Management**: Create admin accounts, add/manage team members.  
- **Task Assignment**: Assign tasks to individuals or multiple users, update details/status.  
- **Task Properties**: Label tasks (`To-Do`, `In Progress`, `Completed`), set priority levels, manage sub-tasks.  
- **Asset Management**: Upload task assets (images, files).  
- **User Account Control**: Activate/deactivate users, delete/trash tasks.  

### 👤 User Features:
- **Task Interaction**: Change task status (`In Progress` or `Completed`), view task details.  
- **Communication**: Add comments or chat in task activities.  

### 🔐 General Features:
- **Authentication & Authorization**: Secure login, role-based access control.  
- **Profile Management**: Update user profiles.  
- **Password Management**: Secure password changes.  

---

## 🛠️ Tech Stack  

### **Frontend:**
- React (Vite)  
- Redux Toolkit (State Management)  
- Headless UI  
- Tailwind CSS  

### **Backend:**
- Node.js  
- Express.js  

### **Database:**
- MongoDB  

---

## 🚀 Setup Instructions  

### 🖥️ Backend Server Setup  

#### **1️⃣ Environment Variables**  
Create a `.env` file inside the `backend` folder and add the following variables:  

```env
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=8800
NODE_ENV=development
```
```
# Open the project in any code editor
# Navigate to the server directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```
If everything is configured correctly, you should see:
```
Server running on port 8800
Database Connected
```
## 🌐 Freontend Setup  

### **1️⃣ Environment Variables**  
Create a `.env` file inside the `frontend` folder and add:  

```env
VITE_APP_BASE_URL=http://localhost:8800
```
```
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the app
npm run dev
```
