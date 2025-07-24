:

🛡️ User Authentication System
A basic token-based user authentication API built with Node.js, Express, and MongoDB. Supports user registration, login, and access to protected routes.

🚀 Features
🔐 Secure password hashing with bcrypt

🧾 JWT-based authentication

👤 User registration & login endpoints

🔐 Middleware-protected routes
Postman/test-ready endpoints

🌐 Ready to deploy to services like Render, Vercel, Railway

📦 Tech Stack
Node.js
Express.js

MongoDB with Mongoose

JSON Web Tokens (JWT)

bcrypt.js

dotenv
dotenv

📁 Project Structure
auth-app/
├── server.js
├── routes/
│   └── authRoutes.js
├── models/
│   └── User.js
├── middleware/
│   └── authMiddleware.js
├── .env
├── .gitignore
├── README.md

🔧 Setup & Run
Clone the repo:
git clone https://github.com/Ekram2004/auth-app.git
Install dependencies:
npm install
Create a .env file:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the server:
node server.js
API Endpoints

Method	     Endpoint	           Description	           Protected
POST	       /signup	          Create a new user	          ❌
POST	       /login	            Login user & get token	    ❌
GET	         /protected	        Access protected route	    ✅

✅ Testing
Use Postman or curl to test:

Signup

Login

Token authentication for /protected
