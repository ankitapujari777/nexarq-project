# Nexarq Assignment - Task Manager API

## Overview
This is a simple **task management API** built using **Cloudflare Workers** and **KV store** for data persistence. The API allows users to:
- Create tasks
- List tasks
- Delete tasks

This project demonstrates full-stack functionality by providing an API layer with **Hono framework**, using **Cloudflare Workers** for serverless computing, and **Cloudflare KV** for storage.

## Tech Stack
- **Cloudflare Workers** (Serverless compute)
- **Hono** (HTTP framework)
- **KV Store** (Data persistence)
- **TypeScript** (Backend logic)

## Features
- **Create Task**: Add a new task with title and description
- **List Tasks**: Retrieve all tasks
- **Delete Task**: Remove a task by ID

## Endpoints
- **GET /**: Health check endpoint, returns a message indicating the API is running.
- **POST /tasks**: Create a new task.
  - Request body:
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```
  - Response:
    ```json
    {
      "id": "task-uuid",
      "title": "string",
      "description": "string",
      "createdAt": "timestamp"
    }
    ```
- **GET /tasks**: List all tasks.
- **DELETE /tasks/:id**: Delete a task by ID.

## Local Development
To run this project locally:

1. Install dependencies:
   ```bash
   npm install
