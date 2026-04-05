🛒 ShopZone

Week 6 Project — Internship Submission
Intern: Tadigadapa Harshavardhan

📌 Overview

ShopZone is a multi-page e-commerce web application built using React.
It allows users to browse products, filter by categories, search items, manage a cart, and complete a checkout process.

The main focus of this project was to build a structured and interactive frontend application with proper routing and state management.

⚙️ Tech Stack
React (Vite)
React Router v6
Context API
DummyJSON API
CSS (custom styling)
🚀 Features
Product listing from API
Category-based filtering
Search and sorting
Product detail page
Add to cart functionality
Cart management (update quantity, remove items)
Login (with guest option)
Protected checkout route
Order success flow
🧠 What I Learned
Managing global state using Context API
Handling protected routes in React Router
Working with APIs and debugging data issues
Structuring a scalable React project
Deploying using Vercel
🛠️ Challenges & Fixes

Issue:
Some categories like smartphones and skincare initially showed no products.

Fix:
After debugging, I identified inconsistencies in the API data and adjusted the fetching and filtering logic to ensure correct results for all categories.

🌐 Live Demo

👉 https://shopzone-d2r9eh7rg-harshas-projects-d27330f4.vercel.app/

📁 Project Structure
🛒 ShopZone

Week 6 Project — Internship Submission
Intern: Tadigadapa Harshavardhan

📌 Overview

ShopZone is a multi-page e-commerce web application built using React.
It allows users to browse products, filter by categories, search items, manage a cart, and complete a checkout process.

The main focus of this project was to build a structured and interactive frontend application with proper routing and state management.

⚙️ Tech Stack
React (Vite)
React Router v6
Context API
DummyJSON API
CSS (custom styling)
🚀 Features
Product listing from API
Category-based filtering
Search and sorting
Product detail page
Add to cart functionality
Cart management (update quantity, remove items)
Login (with guest option)
Protected checkout route
Order success flow
🧠 What I Learned
Managing global state using Context API
Handling protected routes in React Router
Working with APIs and debugging data issues
Structuring a scalable React project
Deploying using Vercel
🛠️ Challenges & Fixes

Issue:
Some categories like smartphones and skincare initially showed no products.

Fix:
After debugging, I identified inconsistencies in the API data and adjusted the fetching and filtering logic to ensure correct results for all categories.

🌐 Live Demo

👉 https://shopzone-d2r9eh7rg-harshas-projects-d27330f4.vercel.app/

📁 Project Structure
shopzone/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── Prompts.md
├── README.md
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.css
    │   ├── ProductCard.jsx
    │   ├── ProductCard.css
    │   └── ProtectedRoute.jsx
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── CartContext.jsx
    │
    ├── pages/
    │   ├── Home.jsx / Home.css
    │   ├── Shop.jsx / Shop.css
    │   ├── Product.jsx / Product.css
    │   ├── Cart.jsx / Cart.css
    │   ├── Contact.jsx / Contact.css
    │   ├── Login.jsx / Login.css
    │   ├── Checkout.jsx / Checkout.css
    │   └── OrderSuccess.jsx / OrderSuccess.css
    │
    └── utils/
        └── formatPrice.js
shopzone/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── Prompts.md
├── README.md
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.css
    │   ├── ProductCard.jsx
    │   ├── ProductCard.css
    │   └── ProtectedRoute.jsx
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── CartContext.jsx
    │
    ├── pages/
    │   ├── Home.jsx / Home.css
    │   ├── Shop.jsx / Shop.css
    │   ├── Product.jsx / Product.css
    │   ├── Cart.jsx / Cart.css
    │   ├── Contact.jsx / Contact.css
    │   ├── Login.jsx / Login.css
    │   ├── Checkout.jsx / Checkout.css
    │   └── OrderSuccess.jsx / OrderSuccess.css
    │
    └── utils/
        └── formatPrice.js
▶️ Run Locally
npm install
npm run dev
🎯 Conclusion

This project helped me understand how to build a complete React application with routing, state management, and real-world features like authentication and cart handling. It also improved my debugging skills while working with external APIs.

📌 Submission

Submitted as part of Week 6 internship task.
