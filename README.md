# Deep Rathi - Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Express.js.

## Features

- Modern UI with responsive design for all devices
- Dark/Light theme toggle
- Animated sections using Framer Motion
- Contact form with validation
- Backend API for handling form submissions

## Technologies Used

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- Typewriter Effect

### Backend
- Express.js
- TypeScript
- MongoDB (optional)
- CORS

## Project Structure

```
portfolio-project/
├── portfolio-frontend/       # Next.js frontend
│   ├── public/               # Static assets
│   ├── src/                  # Source code
│   │   ├── app/              # App router components
│   │   ├── components/       # Reusable components
│   │   └── styles/           # Global styles
│   ├── package.json
│   └── tailwind.config.js
│
└── portfolio-backend/        # Express.js backend
    ├── src/                  # Source code
    │   ├── models/           # Database models
    │   ├── routes/           # API routes
    │   └── server.ts         # Main server file
    ├── .env                  # Environment variables
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB URI (optional, for database functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
```

2. Set up the backend:
```bash
cd portfolio-backend
npm install
```

3. Configure the environment variables:
   - Create a `.env` file in the backend directory based on `.env.example`
   - Add your MongoDB URI if you want to use database functionality

4. Set up the frontend:
```bash
cd ../portfolio-frontend
npm install
```

### Running the Project

#### Development Mode

1. Start the backend:
```bash
cd portfolio-backend
npm run dev
```

2. In a separate terminal, start the frontend:
```bash
cd portfolio-frontend
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

#### Production Mode

1. Build the backend:
```bash
cd portfolio-backend
npm run build
```

2. Build the frontend:
```bash
cd portfolio-frontend
npm run build
```

3. Start the backend:
```bash
cd portfolio-backend
npm start
```

4. Serve the frontend:
```bash
cd portfolio-frontend
npm start
```

## Deployment

### Frontend
The frontend is designed to be deployed on Vercel, but can be deployed on any platform that supports Next.js.

### Backend
The backend can be deployed on services like Render, Heroku, or any other platform that supports Node.js applications.

## License

This project is licensed under the MIT License.

---

Created by Deep Rathi 