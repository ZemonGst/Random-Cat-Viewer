# 🐱 Cat Explorer

A premium, modern web application for discovering random cat breeds with beautiful imagery and detailed information.

## 🚀 Application Logic

First, when the component loads, it checks if the user prefers a light or dark theme and fetches the initial cat. While loading, a skeleton placeholder is shown to ensure a smooth user experience. Once the data is successfully fetched, the cat’s image, name, origin, and temperament are displayed in a polished glassmorphic interface. A dedicated button allows users to fetch a new cat instantly. The theme toggle enables seamless switching between light and dark modes, dynamically adjusting the interface to suit user preference. This flow ensures a responsive and engaging experience for every visitor.

## ✨ Features

- **Premium UI**: Modern glassmorphic design with smooth animations and transitions.
- **Dynamic Content**: Fetches random cats from the FreeAPI, including breed names, descriptions, and origins.
- **Theme Support**: Includes a dark/light mode toggle that respects system preferences.
- **Responsive Layout**: Designed to look great on all devices.
- **Smooth UX**: Features skeleton loaders and micro-animations for a high-end feel.

## 🛠️ Technology Stack

- **React**: Core framework for building the user interface.
- **Vanilla CSS**: Custom design system with glassmorphism and modern typography (Inter).
- **FreeAPI**: Backend data source for cat breed information.
- **Bun/Vite**: Fast development server and build tool.

## 📦 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (or Node.js/npm)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run dev
   ```

## 📄 License
This project is open-source and available for everyone.
