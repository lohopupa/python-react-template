# Python React Template

A template project for building a full-stack web application using Python FastAPI for the backend and React for the frontend, orchestrated with Docker Compose.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Development](#development)
  - [Production](#production)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a boilerplate to kickstart development of a full-stack web application. It leverages Python FastAPI for building the backend API services and React for the frontend user interface. Docker Compose is used for containerization and orchestration of both services, providing an easy and consistent development and deployment environment.

## Features

- **Python FastAPI Backend:**
  - Provides a RESTful API for serving data and handling business logic.
  - Integrated with Docker for containerization.
- **React Frontend:**
  - Offers a responsive and modern user interface.
  - Utilizes Webpack for bundling and managing assets.
- **Docker Compose:**
  - Simplifies the setup and deployment process.
  - Enables easy orchestration of multiple services.

## Prerequisites

Before getting started, ensure you have the following dependencies installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Development

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/lohopupa/python-react-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd python-react-template
   ```

3. Build and start the development environment using Docker Compose:

   ```bash
   docker compose -f docker-compose.yaml -f docker-compose-dev.yaml up --build
   ```

4. Access the Web page at `http://localhost:8080` and the backend at `http://localhost:8080/api`.

### Production

To deploy the application in a production environment, follow these steps:

1. Modify the necessary environment variables and configurations in `docker-compose.yml` file.

2. Build and start the production environment using Docker Compose:

   ```bash
   docker compose -f docker-compose.yaml up --build -d
   ```

3. Access the deployed application at the appropriate domain or IP address.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to improve this project.

## License

This project is licensed under the [MIT License](LICENSE).

