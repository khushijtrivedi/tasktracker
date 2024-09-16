## Backend

### Language & Framework

- **Language**: Go
- **Framework**: Gorilla Mux for routing

### Database

- **Database**: MongoDB (used for storing task data)

### API Endpoints

- **Create Task**
  - **Method**: `POST`
  - **URL**: `/tasks`
  - **Body**: JSON object with fields: `title`, `description`, `date`, `isCompleted`
- **Read All Tasks**
  - **Method**: `GET`
  - **URL**: `/tasks`
- **Read Task by ID**
  - **Method**: `GET`
  - **URL**: `/tasks/{id}`
- **Update Task**
  - **Method**: `PUT`
  - **URL**: `/tasks/{id}`
  - **Body**: JSON object with fields: `title`, `description`, `date`, `isCompleted`
- **Delete Task**
  - **Method**: `DELETE`
  - **URL**: `/tasks/{id}`

### Authentication

- Basic authentication is implemented to secure task management operations.

## Frontend

### Framework

- **Framework**: React (or another chosen framework)

### Features

- Task List View: Displays all tasks with their current status and options to update or delete them.
- Task Creation Form: Allows users to create new tasks.
- Task Editing Form: Provides an interface to update task details.
- Task Deletion Option: Allows users to remove tasks from the list.
- State Management: Manages task data and interactions between the frontend and backend.

## Setup Instructions

### Backend

1. **Install Go**: Follow the instructions on [the Go website](https://golang.org/doc/install) to install Go on your system.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/taskmanager.git
   cd taskmanager/backend
   ```
