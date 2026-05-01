# 👕 Casual Wear  
A full-stack e-commerce web application for buying and managing casual fashion products, built using Next.js, TypeScript, and MongoDB.

---

## 📖 About The Project  
Casual Wear is an online shopping platform developed to provide users with a smooth and intuitive shopping experience for casual clothing.

Users can browse products, add items to their cart, and place orders with optional online payment integration. The system also supports secure authentication and automated email notifications.

This project was developed during an internship to apply real-world full-stack development concepts.

---

## ✨ Key Features  

- 🛍️ Product listing with categories  
- 🔍 Search and filtering functionality  
- 👤 User authentication (Signup / Login using JWT)  
- 🛒 Cart management system  
- 💳 Razorpay integration for secure online payments  
- 📧 Email notifications using Nodemailer (order confirmation & password reset)  
- 🖼️ Image upload and storage using Cloudinary  
- 📱 Fully responsive UI for mobile and desktop  

---

## 🛠️ Built With  

### Frontend  
- Next.js  
- React  
- TypeScript  
- Tailwind CSS  

### Backend  
- Node.js  
- Express.js  

### Database  
- MongoDB  

### Third-Party Services  
- Razorpay (Payment Gateway)  
- Nodemailer (Email Service)  
- Cloudinary (Image Storage)  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js (v16 or above)  
- npm or yarn  
- MongoDB Atlas or local database  

---

### Installation  

```bash
# Clone the repository
git clone https://github.com/your-username/casual-wear.git

# Navigate into the project
cd casual-wear

# Install dependencies
npm install
```

🔑 Environment Variables

Create a .env file in the root directory and add:

```bash
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_password
CLOUDINARY_URL=your_cloudinary_url
```

▶️ Run the Application

```bash
npm run dev
```
Visit:
http://localhost:3000

## 📂 Project Structure  

```bash
Casual_Wear/
├── client/            # Frontend (Next.js)
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
│
├── server/            # Backend (Node.js + Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
