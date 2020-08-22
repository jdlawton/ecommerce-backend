
  # ecommerce-backend

  ![MIT](https://img.shields.io/badge/license-MIT-brightgreen)

  ## Description
  This is a simple backend for an ecommerce site using Node.js, MySQL, and Sequelize to perform CRUD operations on the database using an Express server and its associated routes.

  ## Walkthrough Video
  [Part 1](https://drive.google.com/file/d/19zLb5rEwZ9gJkAFz_bb_qBI4xRi1b5LY/view)
  [Part 2](https://drive.google.com/file/d/1GGfxYHy9CY5YhYcuLjY937m-fRxGBhdh/view)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribute)
  * [Questions](#questions)

  ## Installation
  This project uses Nodes.js, Express, and MySQL. In order to run it, you must first clone the repo to your workstation. You must have MySQL already installed on your local machine. You can install all of the dependencies using "npm install" from your terminal. Once the dependencies are installed, you will need to create a .env file with the following variables, DB_NAME (the name of the database you are connecting to, DB_USER (the name of the user you connect to your db with), and DB_PW (your MySQL password). You can invoke the server with the "npm start" command.

  ## Usage
  Once the server is running, it will wait for you to make an API call. Currently there is no front end for this project, so you can make calls using a program like Insomnia Core. All calls return JSON objects and the following calls currently exist: GET all categories, products, and tags. GET individual categories, products, and tags according to their id, POST categories, products, and tags, PUT categories, products, and tags, and DELETE categories, products, and tags.

  ## License
  This software is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).

  ## Contribution
  This project follows the guidelines of the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If you are interested in contributing, please contact me at my email in the Questions section of this README.

  ## Questions
  If you have any questions about this project, you can email me at joe.lawton@outlook.com.
  For other projects, check out my [GitHub](https://github.com/jdlawton).
