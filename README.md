# Social Network API

## Description

API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

## Technologies Used

- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your MongoDB connection string.
4. Run `npm start` to start the server.

## Usage

Use Insomnia to test the API endpoints.

## Endpoints

### Users

- GET `/api/users`
- GET `/api/users/:id`
- POST `/api/users`
- PUT `/api/users/:id`
- DELETE `/api/users/:id`
- POST `/api/users/:userId/friends/:friendId`
- DELETE `/api/users/:userId/friends/:friendId`

### Thoughts

- GET `/api/thoughts`
- GET `/api/thoughts/:id`
- POST `/api/thoughts`
- PUT `/api/thoughts/:id`
- DELETE `/api/thoughts/:id`
- POST `/api/thoughts/:thoughtId/reactions`
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`

### Link to video
https://app.screencastify.com/v3/watch/8qOyQJhGATo1GRm0vwFU
