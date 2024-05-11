# Meeting Scheduler and Chat Application

This application allows administrators to schedule meetings and add attendees, with notifications sent to users' dashboards. Additionally, users can chat with each other in real-time.

## Features

- **Meeting Creation**: Admins can create new meetings and add attendees.
- **Dashboard Notifications**: Users receive notifications on their dashboards when new meetings are created.
- **Real-time Chat**: Users can chat with each other in real-time.

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Auth0
- **Real-time Communication**: Socket.IO

## Setup

1. Clone the repository:
git clone https://github.com/yourusername/meeting-app.git
2. Install dependencies:
cd meeting-app
npm install
3. Set up environment variables. Create a `.env` file in the root directory and add the following:
PORT=1337 (server)
DB_URI=your_mongodb_uri
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
4. Start the server:
npm start
5. Start the client:
npm run dev
6. Access the application:
Open your web browser and go to `http://localhost:5173`.
## Usage

- **Admin Dashboard**: Log in as an admin to schedule meetings and manage attendees.
- **User Dashboard**: Regular users can view upcoming meetings and engage in real-time chat.

## Contributing

Contributions are welcome! Fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License.
