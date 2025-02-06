# Learnify

![Home Page](./frontend/assests/readme_img.png)

## Project Overview
Learnify is an interactive learning platform designed to make education engaging by incorporating gamification elements. Users answer questions to progress through levels, unlock clues, and solve a final mystery.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Installation Guide](#installation-guide)
- [Usage](#usage)
- [Contributing and Future Improvements](#contributing-and-future-improvements)

## Features
### 🔐 Login and Registration
- Secure user authentication with a token-based system for safe access.

### 🎮 Interactive Gameplay
- Answer multiple-choice questions to progress through levels.
- Unlock visual clues to help solve an overarching mystery.

### 📝 Feedback Mechanism
- Immediate feedback on wrong answers or when time runs out.
- Users can retry questions or review clues before the final challenge.

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap (for responsive design)
- **Backend Communication**: Fetch API
- **Testing**: Jest (for unit and integration testing)

## Deployment
- **API Deployment**: The backend API is hosted using **Render**.

## Project Structure
```
frontend/
│── __tests__/           # Testing-related files
│   ├── login.spec.js    # Login page tests
│── assets/              # Assets for the project
│── images/              # Game images
│── src/                 # JavaScript files
│   ├── login.js         # Handles login logic
│   ├── mystery.js       # Mystery-solving logic
│   ├── questions.js     # Manages question interactions
│   ├── register.js      # Handles user registration
│── cluesReview.html     # Page for reviewing clues when incorrect
│── frontPage.html       # Homepage
│── instruction.html     # Instructions for gameplay
│── login.html           # Login page
│── mystery.html         # Final mystery-solving challenge
│── mysterySolved.html   # Success page when the mystery is solved
│── questions.html       # Main gameplay page with questions
│── register.html        # Sign-up page
│── README.md            # Project documentation
│── .gitignore           # Git ignore file
```

## Installation Guide
Follow these steps to set up **Learnify** locally:

### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd <project-directory>
```

### 2️⃣ Install Node.js (If Required)
- Download and install **[Node.js](https://nodejs.org/)** if it is not already installed.

### 3️⃣ Install Dependencies (If Applicable)
```sh
npm install
```

### 4️⃣ Run a Local Server
- Use **Live Server** (VS Code extension) or any static file server to serve `frontPage.html`.

### 5️⃣ Open in Browser
- Navigate to: `http://localhost:8000` (or your local server's port) to interact with **Learnify**.

## Usage
### ✨ Sign Up
- Register a new account on `register.html`.

### 🔓 Login
- Log in via `login.html` using the registered credentials.

### 📖 Instructions
- Read how to play on `instruction.html`.

### 🎯 Gameplay
- Answer multiple-choice questions on `questions.html`.
- Gather clues and solve the final mystery.

## Contributing and Future Improvements
Contributions are **welcome**! If you have suggestions, improvements, or bug fixes:
- **Fork** the repository.
- **Create a new branch** for your changes.
- **Submit a pull request** with a clear explanation.

### Future Enhancements:
✔ Improved UI/UX for better engagement
✔ More question categories and difficulty levels
✔ Leaderboard and user performance tracking

## 🎉 Thank You for Exploring Learnify!
Enjoy the experience! Remember, every challenge is a step towards learning. 🚀

