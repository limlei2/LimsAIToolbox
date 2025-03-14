# Lim's AI Toolbox
Toolbox collection of useful tools such as recipe creation and email reply generation with AI created using Angular, Spring Boot with the use of Google Gemini and OpenAI APIs

#### Project Initialization

Run `npm install` in the frontend directory to download all required dependencies

#### Running the Project

Run `ng s` in the frontend directory to run the Angular frontend app

# Angular Spring Boot Application

This repository contains a full-stack application built with Angular for the frontend and Spring Boot for the backend. This guide will walk you through the steps to set up and run both the frontend and backend applications.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Java Development Kit (JDK)**: Version 11 or higher.
- **Maven**: For building and managing the Spring Boot backend.
- **Node.js and npm**: For building and running the Angular frontend.
- **Git**: For cloning the repository.

## Backend Setup (Spring Boot)

1. **Clone the Repository**
   ```bash
   git clone ${project_url}
   ```

2. **Install Dependencies**
   Navigate to the `backend` directory and run the following command to download the required dependencies:
   ```bash
   cd backend
   mvn clean install
   ```

3. **Run the Backend Application**
   After the dependencies are installed, you can run the Spring Boot application using:
   ```bash
   mvn spring-boot:run
   ```
   The backend server will start on `http://localhost:8080`.

## Frontend Setup (Angular)

1. **Navigate to the Frontend Directory**
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**
   Run the following command to install the Angular project dependencies:
   ```bash
   npm install
   ```

3. **Run the Frontend Application**
   Start the Angular development server with:
   ```bash
   ng serve
   ```
   The frontend application will be available at `http://localhost:4200`.

## Running the Full Application

To run the full application, you need both the backend and frontend running simultaneously. Follow these steps:

Once both applications are running, you can access the full application by navigating to `http://localhost:4200` in your web browser.

## Environment Configuration

To be able to run the application properly, you will need to add your own API keys to the backend for OpenAI and Gemini.

- **Backend**: Locate the application.properties in the resources directory and replace ${GEMINI_KEY} and ${OPENAI_KEY}

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues. Your contributions are welcome!
