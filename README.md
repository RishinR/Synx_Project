# Meeting Scheduler and Chat Application

This application allows administrators to schedule meetings and add attendees, with notifications sent to users' dashboards. Additionally, users can chat with each other in real-time.

## Features

- **Meeting Operations**: Admins can create update and delete meetings and add attendees.
- **Dashboard Notifications**: Users receive notifications on their dashboards when new meetings are created.
- **Real-time Chat**: Users can chat with each other in real-time.

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose

## Setup

1. Clone the repository:
git clone https://github.com/your_username/Synx_Project.git
2. Install dependencies:
cd meeting-app
npm install
3. Set up environment variables. Create a `.env` file in the root directory and add the following:
PORT=1337
DB_URI=your_mongodb_uri
4. Start the server:
npm start
## Usage

- **Admin Dashboard**: Log in as an admin to schedule meetings and manage attendees.
- **User Dashboard**: Regular users can view upcoming meetings and engage in real-time chat.

## Contributing

Contributions are welcome! Fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License.
