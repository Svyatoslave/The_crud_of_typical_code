# The_crud_of_typical_code
main

Before starting the server, the data is downloaded from the https://jsonplaceholder.typicode.com/{} with a check for their presence


CRUD users

interface User { id: number; name: string; username: string; email: string; address: string; password: string; }

POST /users - Create user. Result: User

GET /users - Find all users. Result: User[]

GET /users/:id - Find user by id. Result: User

PUT /users/:id - Update user by id. Result: User

DELETE /users/:id - Delete user by id. Result: true

communication between models

libraries: express, axios, mongoose
