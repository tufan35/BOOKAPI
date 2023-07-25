node.js-clean-architecture

A use case of Clean Architecture in Node.js comprising of Express.js, MongoDB as the main (but replaceable) infrastructure.

Overview

This example is a simple RESTful API application in which a user can create / update / delete / find a post books, by using the Clean Architecture.


Books-API Endpoint Purpose:

The purpose of the Books-API endpoints is to handle the operations related to book information, including saving, deleting, listing, and updating book data. These endpoints are created to test the functionality of these operations.

Technologies Used in the Project:

This project is designed following the clean architecture principles. MongoDB is used as the database, and unit tests have been implemented.

Prerequisites for Local Execution:

To run the project locally, you need the following:

    MongoDB server
    Node.js

Steps to Run the Project Locally:

    Open the project directory in your local environment.
    If you want to run the project locally, ensure that you have a MongoDB server running. Update the mongoURI in mongoose.js file by uncommenting it and setting the appropriate MongoDB connection URI.
    In the terminal, navigate to the project directory and execute the command "node index" to start the project.

Unit Testing:

To perform unit testing, ensure that the project is running locally, and then execute the command "npm test" in the terminal to see the test results.

Docker:

If you prefer to run the project using Docker, navigate to the project directory in the terminal and execute the command "docker-compose up -d". This will start the project in a Docker container.

Note: Make sure you have Docker installed and properly configured on your system before running the project using Docker.

  
