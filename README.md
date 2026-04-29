👕 Casual Wear – E-commerce Web Application
📌 Overview

Casual Wear is a modern e-commerce web application designed for browsing and purchasing fashion products online. The platform provides a seamless user experience with features like product browsing, authentication, cart management, and order handling.

🚀 Features

🛍️ Browse products by category
🔍 Search and filter products
👤 User authentication (Login / Register)
🛒 Add to cart & manage cart items
💳 Order placement (with optional payment integration)
📧 Email notifications (order confirmation, password reset)
🖼️ Image upload and management
📱 Responsive design for all devices

🛠️ Tech Stack

Frontend
Next.js
TypeScript
React
Tailwind CSS (or your styling framework)
Backend
Node.js
Express.js
Database
MongoDB

Third-Party Services

Razorpay (for payments)
Nodemailer (for email services)
Cloudinary (for image storage)

📂 Project Structure

Casual_Wear/
│── components/        # Reusable UI components
│── pages/             # Next.js pages (routes)
│── public/            # Static assets
│── styles/            # CSS / styling files
│── backend/           # API and server logic
│── models/            # Database schemas
│── utils/             # Helper functions
│── config/            # Configuration files

⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/your-username/casual-wear.git
cd casual-wear

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables
Create a .env file and add:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
RAZORPAY_KEY=your_key
EMAIL_USER=your_email
EMAIL_PASS=your_password
CLOUDINARY_URL=your_cloudinary_url

4️⃣ Run the project
npm run dev
