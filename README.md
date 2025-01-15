# Task Dashboard with Trello Integration

A dynamic task management dashboard that integrates with Trello's API, allowing users to create, manage, and track tasks with timestamps.

## ✨ Features

- Real-time task creation and deletion
- Trello board synchronization
- Timestamp tracking for tasks
- Interactive dashboard interface
- Task status management
- Due date tracking
- Task categorization

## 🚀 Technologies Used

- Frontend Framework (React/Vue/Angular)
- Trello API
- RESTful API integration
- Local Storage for caching
- Moment.js/Date-fns for timestamp management

## 📋 Prerequisites

Before running this project, ensure you have:
- Node.js (version 14 or higher)
- npm or yarn package manager
- Trello API Key and Token
- Modern web browser

## 🔑 API Configuration

1. Get your Trello credentials:
   - Sign up for a Trello account
   - Get your API key from: https://trello.com/app-key
   - Generate a Token

2. Configure environment variables:
```env
TRELLO_API_KEY=your_api_k
TRELLO_TOKEN=your_token
TRELLO_BOARD_ID=your_board_id
```

## 🛠️ Installation

1. Clone the repository
```bash
git clone [your-repository-link]
cd [project-directory]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
   - Create `.env` file in root directory
   - Add your Trello credentials

4. Start the development server
```bash
npm start
# or
yarn start
```

## 💻 Usage

### Task Creation
```javascript
// Example API call for task creation
POST /api/tasks
{
  "title": "New Task",
  "description": "Task description",
  "dueDate": "2025-01-20T10:00:00Z"
}
```

### Task Deletion
```javascript
// Example API call for task deletion
DELETE /api/tasks/:taskId
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   ├── TaskList/
│   ├── TaskForm/
│   └── TaskCard/
├── services/
│   └── trelloAPI.js
├── utils/
│   └── timeFormatter.js
└── config/
    └── apiConfig.js
```

## 📊 Features Explained

### Task Management
- Create new tasks with titles and descriptions
- Set due dates and priorities
- Delete completed tasks
- Track task status

### Time Tracking
- Automatic timestamp generation for tasks
- Due date management
- Time-based filtering
- Historical task view

### Trello Integration
- Automatic sync with Trello boards
- Real-time updates
- Bi-directional data flow
- Error handling and retry mechanisms

## 🔄 API Endpoints

```
GET    /api/tasks          - Fetch all tasks
POST   /api/tasks          - Create new task
DELETE /api/tasks/:id      - Remove task
PUT    /api/tasks/:id      - Update task
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

Common issues and solutions:
- API authentication errors: Check credentials in .env file
- Task sync issues: Verify Trello board permissions
- Timestamp inconsistencies: Check timezone settings

## 🔮 Future Enhancements

- Batch task operations
- Advanced filtering options
- Task templates
- Email notifications
- Mobile responsive design
- Offline mode support

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 📞 Contact

[Sapna Sarkar] - [sapnapks1@gmail.com]

Project Link: [https://github.com/sapna008/Task-Dashboard.git](https://github.com/sapna008/Task-Dashboard.git)

## 🙏 Acknowledgments

- Trello API documentation and team
- Open source community
- Contributors and testers
