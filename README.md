# API for Rating App

Welcome to the API documentation for the Rating App! This API is designed to handle the storage of ratings submitted by users of the Rating App. It utilizes the Express framework to handle HTTP requests, Mongoose for interacting with the MongoDB database, and provides a simple and straightforward API for managing ratings.

## Setup

Before using the API, make sure you have the following prerequisites:

- MongoDB: Make sure you have a running instance of MongoDB or access to a MongoDB cluster.
- Node.js and npm: Install Node.js and npm on your machine.

## Getting Started

To set up and run the API locally, follow these steps:

1. Clone the repository or download the code.
2. Navigate to the project directory using the command line.
3. Install the necessary dependencies by running the command `npm install`.
4. Open the `app.js` file and update the MongoDB connection URL in the `connectToDB` function to point to your MongoDB instance.
5. Start the API server with the command `node app.js`.

The API will be available at [http://localhost:4000](http://localhost:4000). You can now make HTTP requests to interact with the API endpoints.

## Endpoints

The API exposes the following endpoints:

### Create a Rating

**Endpoint:** `POST /ratings`

This endpoint allows you to create a new rating in the database.

#### Request Body

The request body should contain the following JSON data:

```json
{
  "ratingNumber": 3
}
```
