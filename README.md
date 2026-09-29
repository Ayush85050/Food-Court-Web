# 🍽️ Food Court — MERN Stack Food Ordering Application

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

A feature-rich, full-stack **MERN (MongoDB, Express, React, Node.js)** Web Application for online food ordering. Featuring interactive menu categories, real-time search, diet filters, dynamic cart management, and secure JWT authentication.

Developed by **Ayush Sharma**.

---

## 🌟 Key Features

- **🍽️ Rich Interactive Food Menu**: 15+ mouth-watering dishes across 6 categories:
  - *Biryani / Rice*
  - *Starters*
  - *Pizza*
  - *Burgers & Wraps*
  - *Chinese & Noodles*
  - *Desserts & Beverages*
- **🔍 Live Search & Filter Bar**: Instant search across dishes and descriptions.
- **🏷️ Category Tabs**: 1-click filtering by food category.
- **🟢🔴 Veg / Non-Veg Diet Filter**: Instant diet filter toggle with visual green/red badges on food cards.
- **🛒 Dynamic Cart & Price Calculation**: Portion size selection (Half, Full, Regular, Medium, Large) with instant price calculation and smooth cart updates.
- **🔒 Secure Authentication**: User Signup and Login powered by **Bcrypt** password hashing and **JSON Web Tokens (JWT)**.
- **⚡ Failover Database System**: Built-in fallback dataset ensuring 100% uptime and seamless presentation.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Frontend** | React 18, React Router v6, Bootstrap 5, Material-UI Icons |
| **Backend** | Node.js, Express.js, EJS |
| **Database** | MongoDB Atlas, Mongoose ORM |
| **Auth & Security** | JSON Web Token (JWT), BcryptJS, Express Validator, CORS |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/AyushSharma/Food-Court-Web.git
cd Food-Court-Web
```

### 2. Install Dependencies
```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install --legacy-peer-deps
```

### 3. Build & Run Application
```bash
# Build Frontend Bundle
cd client
npm run build

# Start Backend Server
cd ../server
node index.js
```
Open your browser and navigate to `http://localhost:5000/`.

---

## 👤 Author

- **Ayush Sharma**
- GitHub: [@Ayush85050](https://github.com/Ayush85050)

---

⭐ *If you like this project, feel free to give it a star on GitHub!*
