# **Mail Application**

A full-stack mail application with features similar to Gmail. Users can register, log in, send emails, view their inbox, and see sent emails. The app uses React for the frontend, Redux for state management, and Axios for making API requests.

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Redux Store](#redux-store)
- [Usage](#usage)
- [Contributing](#contributing)

## **Features**
- User authentication (Login/Signup).
- View inbox and sent emails.
- Compose and send emails.
- Seamless navigation with a sidebar (similar to Gmail).
- Persist email data using Redux-Persist.
- Dynamic email views (time display adjustments based on when the email was sent).

## **Tech Stack**
- **Frontend**: React, Redux, React-Router, Axios, Tailwind CSS, React Hot Toast
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: Redux Toolkit, Redux Persist

## **Installation**

### **Prerequisites**
- Node.js
- MongoDB
- Git

### **Getting Started**

1. Clone the frontend repository:
    ```
    https://github.com/Nainvi-singh/Gmail_Clone.git
    ```
2. Navigate into the project directory:
    ```
    cd frontend
    ```
3. Install dependencies:
    ```
    npm install
   ```
4. Clone the backend repository:
   create a backend folder then clone:
 ```
 https://github.com/Nainvi-singh/Gmail_clone_backend.git
  ```
   ### To Know More About Backend: [Click Here](https://github.com/Nainvi-singh/Gmail_clone_backend)
5.Navigate into the project directory:
    ```
    cd backend
    ```
6. Install dependencies:
  ```
    npm install
   ```

7. Create a `.env` file in the root directory for backend. Example for the backend `.env`:
    ```
    MONGO_URI=<your_mongo_db_connection_string>
    JWT_SECRET=<your_jwt_secret>
    PORT=YOUR_PORT
    ```
8. Start the development server:
    ```bash
    cd backend
    nodemon index.js
    ```

9. Start the backend server:
    ```bash
    cd frontend
    npm run dev
    ```

10. Open your browser and go to `http://localhost:{PORT}`.

## **Project Structure**

mail-app/ │ ├── client/ # Frontend code │ ├── src/ │ │ ├── components/ # React components (Inbox, Sidebar, SendEmail, Mail) │ │ ├── redux/ # Redux store and slices │ │ ├── App.jsx # Main App component │ │ └── index.js # Entry point for React app │ └── package.json # Client dependencies │ ├── server/ # Backend code │ ├── routes/ # API routes for emails │ ├── models/ # MongoDB models │ └── server.js # Entry point for the server │ ├── .env # Environment variables └── README.md


## **Redux Store**

The Redux store is set up to handle the email states (Inbox and Sent emails) and handle asynchronous API calls for email operations.

- **store.js**: Configures the Redux store, with persistence to retain data even after refreshing.
- **appSlice.js**: Contains the state and actions for emails, including adding, sending, and fetching emails from the backend.


## **Usage**
- Log in or register a new account.
- Compose and send emails.
- View sent emails in the "Sent" section.
- Refresh the page, and the emails will persist using Redux Persist.

## **Contributing**
- Fork the repository.
- Create a new feature branch.
- Make your changes and commit them.
- Open a pull request.
