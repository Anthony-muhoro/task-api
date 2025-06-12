# Tasks API

A simple Express.js + Prisma RESTful API for managing tasks with soft-delete and full CRUD support using ESM syntax.


Base url : https://task-api-1-232o.onrender.com/
## API Endpoints

### POST /task

Create one or multiple tasks.

#### Request Body (Single Task)

```json
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread"
}
```

response if success
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": [
    {
      "id": "f786a170-cfe0-4040-8d1a-364880271878",
      "title": "Clean the house",
      "description": "Sweep, mop, and organize the living room",
      "isCompleted": false,
      "isDeleted": false
    }
  ]
}
````

---

### GET /tasks



#### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "c8d89b58-eebb-46c0-b261-a59232de001b",
      "title": "Terminar el informe",
      "description": "Escribir la conclusión y revisar la gramática",
      "isCompleted": false,
      "isDeleted": false
    },
    {
      "id": "672a0385-e7b2-4cce-8d2e-e1390c04a752",
      "title": "Buy groceries",
      "description": "Milk, eggs, bread, and bananas",
      "isCompleted": false,
      "isDeleted": false
    },
    {
      "id": "8abec841-27d4-4a17-9cce-a96478f21979",
      "title": "Llamar al médico",
      "description": "Agendar una cita para el martes",
      "isCompleted": false,
      "isDeleted": false
    },
    {
      "id": "da90c27b-bb6c-43f4-b4b6-2995f5d216b9",
      "title": "Finish project",
      "description": "Finalize backend logic",
      "isCompleted": false,
      "isDeleted": false
    },
    {
      "id": "76377d17-3d4f-4c64-af32-b5b1538291ac",
      "title": "Organize files",
      "description": "Sort documents into folders",
      "isCompleted": false,
      "isDeleted": false
    },
    {
      "id": "4660c491-e456-4347-8771-9007b69cb8e1",
      "title": "Pagar las facturas",
      "description": "Luz, agua, internet",
      "isCompleted": false,
      "isDeleted": false
    },
    {
      "id": "6821c867-f7c6-4a45-84d4-27b54998f19d",
      "title": "Walk the dog",
      "description": "Take Max for a 30-minute walk",
      "isCompleted": false,
      "isDeleted": false
    }
  ]
}
```

---

### GET /task/\:id

Get a specific task by ID.

#### Response (If Found)

```json
{
  "success": true,
  "data": {
    "id": "c8d89b58-eebb-46c0-b261-a59232de001b",
    "title": "Terminar el informe",
    "description": "Escribir la conclusión y revisar la gramática",
    "isCompleted": false,
    "isDeleted": false
  }
}
```

---

### PUT /task/\:id

Fully update a task.

#### Request Body

```json
{
  "title":"Go to school",
  "description":"Use a matatu"
  
}
```

response
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "id": "c8d89b58-eebb-46c0-b261-a59232de001b",
    "title": "Go to school",
    "description": "Use a matatu",
    "isCompleted": false,
    "isDeleted": false
  }
}
```
---

### PATCH /task/\:id

Partially update a task.

#### Request Body (Example)

```json
{
  "isCompleted": true
}
```

---

### DELETE /task/\:id

Soft-delete a task by setting `isDeleted` to `true`.

---
