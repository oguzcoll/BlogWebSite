# Blog Website

This is a React-based blog website where users can read and write blog posts. Users can perform the following actions:

- Create an account
- Log in to their account
- Create a new blog post
- View a list of all blog posts
- View a single blog post
- Edit their own blog post
- Delete their own blog post

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Running the Application](#running-the-application)
- [Built With](#built-with)
- [Creating the API](#creating-the-api)
- [Distributing the Frontend and Backend Parts](#distributing-the-frontend-and-backend-parts)
- [Environment Variables](#environment-variables)
- [Archive Mount Parts](#archive-mount-parts)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, you need to clone the repository onto your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/oguzcoll/BlogWebSite.git


## Prerequisites

Before you can run the application, you need to have the following installed on your system:

- Node.js
- NPM

You can download Node.js from the official website: https://nodejs.org/en/download/.

## Installing

To install the required dependencies for the project, run the following command:



This will install all the necessary packages and modules required by the project.

## Running the Application

To run the application, run the following command:



This will start the application and launch it in your browser.

## Built With

- React.js
- Node.js
- Express.js
- MongoDB
- Bootstrap

## Creating the API

The API for this project was created using Node.js and Express.js. The API allows users to create, read, update, and delete blog posts. It also includes authentication and authorization functionality, allowing only authorized users to perform certain actions.

## Distributing the Frontend and Backend Parts

The frontend and backend parts of the project were separated into two different directories: `client` and `server`. The `client` directory contains all the frontend code written in React.js, while the `server` directory contains all the backend code written in Node.js and Express.js.

To distribute the frontend and backend parts, the `client` and `server` directories were uploaded to different directories on the same server. The frontend code was then served using a web server like Apache or Nginx, while the backend code was served using a process manager like PM2.

## Environment Variables

The project uses environment variables to store sensitive information like API keys and database credentials. These environment variables are stored in a `.env` file in the root directory of the project. The `.env` file is not included in the repository to protect sensitive information.


