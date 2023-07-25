node.js-clean-architecture

A use case of Clean Architecture in Node.js comprising of Express.js, MongoDB as the main (but replaceable) infrastructure.

Overview

This example is a simple RESTful API application in which a user can create / update / delete / find a post books, by using the Clean Architecture.


Books-API Endpoints Purpose:

The purpose of the Books-API endpoints is to facilitate the operations related to book information, including saving, deleting, listing, and updating books, as well as testing these functionalities.

Technologies Used in the Project:

This project follows the clean architecture principles. It utilizes MongoDB as the database and includes unit tests.

Prerequisites for Local Execution:

To run the project locally, you need the following:

    MongoDB server
    Node.js

Steps to Run the Project Locally:

Local Environment:

    If you wish to run the project locally, uncomment the mongoURI in the mongoose.js file and set the appropriate MongoDB connection URI.
    In the terminal, navigate to the project directory and execute the command "node index" to start the project.

Unit Testing:

    After running the project locally, execute the command "npm test" in the terminal to run the unit tests and see the test results.

Docker:

    If you prefer to run the project using Docker, navigate to the project directory in the terminal and execute the command "docker-compose up -d". This will start the project in a Docker container.

Note: Make sure you have Docker installed and properly configured on your system before running the project using Docker.

Project Source Code:

You can find the source code of the project at the following GitHub repository: https://github.com/tufan35/BOOKAPI.git

Within the "lib" directory of the project, you can access the Postman collection and documentation.


FOLDER STRUCTURE

  ![Screenshot_1](https://github.com/tufan35/BOOKAPI/assets/34610153/d52804cf-60ad-40a9-90f5-a5d7686485a1)

