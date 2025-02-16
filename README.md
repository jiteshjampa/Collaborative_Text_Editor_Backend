
# 🚀 Collaborative Text Editor Backend  
![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=flat-square&logo=node.js)  
![Express.js](https://img.shields.io/badge/Express.js-⚡-blue?style=flat-square&logo=express)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?style=flat-square&logo=mongodb)  
![Socket.io](https://img.shields.io/badge/Socket.io-RealTime-black?style=flat-square&logo=socket.io)  
![Deployed on Render](https://img.shields.io/badge/Deployed-Render-purple?style=flat-square&logo=render)  

A real-time collaborative text editor backend using **Node.js, Express, MongoDB, and Socket.io**. Provides a REST API for document management and real-time synchronization using WebSockets.  

---

## 🔥 Features  
✅ **RESTful API** for managing documents (CRUD operations).  
✅ **Real-time collaboration** with Socket.io.  
✅ **MongoDB Atlas** for cloud-based storage.  
✅ **Deployed on Render** for scalable backend hosting.  

---

## ⚙️ Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Real-time:** Socket.io  
- **Deployment:** Render  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/collab-text-editor-backend.git
cd collab-text-editor-backend
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the root directory and add:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the Server  
```sh
npm start
```
_Server will run on `http://localhost:5000`._

---

## 📌 API Documentation  

### 🔗 Postman API Documentation  
📄 **[View Full API Documentation]([https://www.postman.com/your-postman-link](https://imf-gadget.postman.co/workspace/New-Team-Workspace~0cb77262-e5b7-4952-bd34-e3b77ad05fbd/collection/36484787-45c39f3c-5f25-41c3-8876-814f818b591e?action=share&creator=36484787))**  

You can use this link to test all API endpoints easily on Postman.  

---

## 📌 API Endpoints  

### ➤ Create a New Document  
```http
POST /api/docs
```
**Request Body:**  
```json
{
  "TextId": "unique-text-id",
  "Title": "My First Document"
}
```
**Response:**  
```json
{
  "message": "Document created successfully",
  "document": { "TextId": "unique-text-id", "Title": "My First Document" }
}
```

### ➤ Get a Document  
```http
GET /api/docs/:id
```

### ➤ Update a Document  
```http
PATCH /api/docs/:id
```

---

## 🔗 WebSocket (Socket.io) Events  

| Event Name       | Description |
|------------------|-------------|
| `join-doc`      | Join a specific document room |
| `update-doc`    | Broadcast content updates in real-time |
| `receive-update` | Receive live document updates |
| `leave-doc`     | Notify when a user leaves |

---

## 🚀 Deployment  

The backend is **deployed on Render**:  
🔗 **[Live API Endpoint]([https://your-api-url.onrender.com](https://collaborative-text-editor-backend.onrender.com))**  

To deploy manually:  
```sh
git push origin main
```

---

## 📌 Contributing  
Contributions are welcome! Feel free to open issues or submit pull requests.  

---

## ⭐ Show Some Love  
If you like this project, please ⭐ star this repository! 🚀  


