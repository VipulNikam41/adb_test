# Todo App

This is a simple Todo application with a React frontend, Django backend, and MongoDB for storage. The project supports basic CRUD (Create, Read, Update, Delete) operations. Docker and Docker Compose are used to containerize and manage the application.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Containerized with Docker

## Installation

### Prerequisites

Make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:VipulNikam41/todo-app.git
   cd todo-app
   ```

2. Build and run the containers using Docker Compose:
   ```bash
   docker-compose up --build
   ```
This command will start three containers: one for the React frontend, one for the Django backend, and one for MongoDB.

3. Open your browser and go to http://localhost:3000 to see the frontend application.

## Usage
### Basic Commands

To start/stop the containers:
   ```bash
   docker-compose up
   docker-compose down
   ```

To rebuild the containers after making changes:
   ```bash
   docker-compose up --build
   ```

### API Endpoints

Here are the main API endpoints available in this application:
* GET /api/todos/ - Get all todos
* POST /api/todos/ - Create a new todo
* PUT /api/todos/:id/ - Update a todo by ID
* DELETE /api/todos/:id/ - Delete a todo by ID