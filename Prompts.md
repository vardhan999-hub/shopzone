# Prompts.md — ShopZone Development Notes

**Project:** ShopZone  
**Week:** 6  
**Intern:** Tadigadapa Harshavardhan  

---

## Overview

This document outlines how I used AI tools as a reference while building the ShopZone project.  
The main focus was on understanding concepts, implementing features manually, and improving the project through testing and iteration.

---

## Prompt 1 — Project Structure

**Prompt Used:**  
Basic guidance on structuring a React SPA with routing.

**What I Did:**
- Created a clean folder structure (components, pages, context, utils)  
- Implemented routing using React Router  
- Ensured Navbar is shared across all pages  

---

## Prompt 2 — Cart State Management

**Prompt Used:**  
Reference for using Context API to manage cart state.

**What I Did:**
- Built CartContext manually  
- Implemented add, remove, update quantity, and clear cart  
- Prevented duplicate items by increasing quantity  
- Added localStorage persistence  
- Built a toast notification system  

---

## Prompt 3 — Authentication

**Prompt Used:**  
Basic idea for managing login state.

**What I Did:**
- Created AuthContext  
- Implemented login and logout  
- Stored user data in localStorage  
- Integrated authentication with Navbar and protected routes  

---

## Prompt 4 — Protected Routes

**Prompt Used:**  
Concept of redirecting unauthenticated users.

**What I Did:**
- Created ProtectedRoute component  
- Redirected users to login if not authenticated  
- Passed original route and handled redirect after login  

---

## Prompt 5 — Shop Page

**Prompt Used:**  
Fetching and displaying products.

**What I Did:**
- Implemented API fetching  
- Added search (title + category)  
- Added sorting (price and rating)  
- Implemented category filtering  
- Built skeleton loading UI  
- Added proper error handling  

---

## Prompt 6 — Product Page

**Prompt Used:**  
Dynamic routing with useParams.

**What I Did:**
- Built full product detail page  
- Added image gallery  
- Calculated discount price  
- Implemented loading and error states  
- Added Add-to-Cart feedback  

---

## Prompt 7 — Cart Page

**Prompt Used:**  
Basic cart UI reference.

**What I Did:**
- Built complete cart interface  
- Added quantity controls with validation  
- Implemented subtotal and total calculation  
- Improved layout for mobile  

---

## Prompt 8 — Login Flow

**Prompt Used:**  
Redirect after login.

**What I Did:**
- Implemented guest login  
- Added redirect to previous page  
- Displayed message for protected routes  

---

## Prompt 9 — Checkout Flow

**Prompt Used:**  
Basic checkout logic.

**What I Did:**
- Protected checkout route  
- Prevented access if cart is empty  
- Built order summary  
- Cleared cart after order  
- Navigated to success page  

---

## Prompt 10 — UI Design

**Prompt Used:**  
General guidance for styling.

**What I Did:**
- Designed dark theme using CSS variables  
- Added animations and transitions  
- Built reusable UI components  
- Ensured responsive design  

---

## Additional Work Done Independently

- Implemented skeleton loaders for better UX  
- Added toast system with cleanup  
- Handled API errors properly  
- Optimized performance using hooks  
- Maintained clean and scalable project structure  

---

## Final Reflection

AI was used only as a reference for concepts and structure.  
The project was implemented, tested, and improved manually.

This helped me understand how to build a real-world React application with proper state management, routing, and user experience.
