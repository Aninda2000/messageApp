# messageApp

The Message App is a simple web application that allows users to post and view messages. It consists of a server with two API endpoints for creating and retrieving messages and a client-side application built using React and Next.js.

## Features

- Create and submit messages using a user-friendly form.
- View all submitted messages on a separate page.
- Simple and responsive user interface.

## Technologies Used

- MongoDB: Database for storing messages.
- Express.js: Web framework for the server.
- React: JavaScript library for building the front-end.
- Next.js: React framework for server-rendered applications.
- Node.js: JavaScript runtime environment.
- RESTful API: Used for communication between the front-end and back-end.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your system.
- MongoDB should be installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aninda2000/messageApp.git
   cd message-app
2.Install server dependencies:
  cd server
  npm install
3. Install clent dependencies:
  cd ../client
  npm install

### Configuration
Create a .env file in the server directory and add the following environment variables:
PORT=4000
DB=mongodb+srv://aninda:aninda123@cluster0.ehdoyp7.mongodb.net/

### Running the Application
1.Start the server
  npm start
  
  The server should now be running on http://localhost:4000.
  
2.Start the client:
  cd ../client
  npm run dev

  The client application should now be accessible at http://localhost:3000.

### Usage 

Open your web browser and navigate to http://localhost:3000 to access the Message App.

On the landing page, you'll see a form where you can enter your name and a message. Click the "Submit" button to submit a message.

To view all messages, navigate to http://localhost:3000/messages.

Messages are retrieved from the server and displayed on the Messages page.

### API Endpoints
GET /messages: Retrieve all messages.
POST /message: Create a new message. Requires a JSON request body with "name" and "message" fields.





