# ⚡ Overclocked

> **The Next-Generation E-Commerce Platform.** > _Speed. Innovation. Trust._

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 👥 Team Members

| Name                | GitHub                                     |
| ------------------- | ------------------------------------------ |
| **Ahmed Elshafei**  | [@AhmedElshafei](https://github.com/)      |
| **Seif Atef**       | [@seif-a096](https://github.com/seif-a096) |
| **Abdelrahman Amr** | [@AbdelrahmanAmr](https://github.com/)     |
| **Zyad Ayman**      | [@ZyadAyman](https://github.com/)          |
| **Ebraam Ashraf**   | [@EbraamAshraf](https://github.com/)       |

---

## 📖 Overview

**Overclocked** is not just an online store; it's a high-performance digital hub designed for electronics enthusiasts. Built on the bleeding edge of web technology with **React 19** and **React Router v7**, it delivers an instantaneous, app-like shopping experience.

We bridge the gap between vendors and tech lovers by providing powerful tools, real-time updates, and a seamless, accessible interface for the modern web.

## 🎯 Objectives

To build a scalable and innovative e-commerce platform dedicated to electronics, offering customers a seamless shopping experience and vendors powerful tools to grow their business, while establishing Overclocked as a trusted digital hub for technology enthusiasts.

---

## ✨ Key Features

### 🛍️ User Experience

- **Smart Product Discovery**: Advanced filtering, sorting, and instant search capabilities.
- **Dark/Light Mode**: Native system preference detection with a persistent manual toggle.
- **Responsive Design**: Mobile-first architecture ensuring a flawless experience on all devices.
- **Toast Notifications**: Non-intrusive, real-time feedback for user actions (add to cart, errors, success).

### 🛒 E-Commerce Engine

- **Persistent Cart**: Real-time shopping cart updates that save state across sessions.
- **Smart Wishlist**: Save favorite items for later with local persistence.
- **Secure Checkout**: Optimized multi-step checkout flow supporting various payment methods.

### ⚡ Performance & Core

- **Optimized Builds**: Powered by Vite for lightning-fast HMR and production builds.
- **State Management**: Robust global state handling using Context API combined with React Query for server state caching.
- **Type Safety**: End-to-end TypeScript implementation for reliability and maintainability.

---

# 🏗️ Architecture

```
src/
├── components/          # Shared UI Components
│   ├── layout/         # Header, Footer, Sidebar, Layout wrappers
│   └── ui/             # Atomic components (Buttons, Inputs, Cards)
│
├── contexts/           # Global state providers (Cart, Theme, Auth)
│
├── data/               # Static data / Mock API responses
│
├── hooks/              # Custom reusable hooks (useCart, useTheme)
│
├── pages/              # Page-level components (Home, ProductDetails, Checkout)
│
├── router/             # React Router v7 route definitions
│
├── types/              # TypeScript interfaces and type definitions
│
├── utils/              # Helper functions and formatters
│
└── main.tsx            # Application entry point
```

---

## 🛠️ Tech Stack

| Category     | Technology                | Description                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------- |
| **Core**     | React 19                  | The latest library for web and native user interfaces.            |
| **Language** | TypeScript                | Strongly typed JavaScript for scalable development.               |
| **Routing**  | React Router DOM v7       | Next-gen declarative routing for React web apps.                  |
| **State**    | Context API + React Query | Efficient asynchronous state management and data fetching.        |
| **Styling**  | Tailwind CSS + DaisyUI    | Utility-first CSS framework with accessible component primitives. |
| **Build**    | Vite                      | Next Generation Frontend Tooling.                                 |
| **Icons**    | Heroicons + React Icons   | Comprehensive and consistent icon sets.                           |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/seif-a096/Overclocked.git](https://github.com/seif-a096/Overclocked.git)
    cd Overclocked
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The app should now be running at `http://localhost:5173`.

### Build for Production

```bash
# Type check and build
npm run build

# Preview the production build locally
npm run preview
```
