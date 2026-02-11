# HRMS Lite - Backend API

A comprehensive Human Resource Management System backend built with Node.js, Express, and MongoDB. This API provides endpoints for managing employees and attendance records with proper validation and error handling.

## 📋 Project Overview

HRMS Lite Backend is a RESTful API that serves as the backbone for the HRMS Lite application. It provides complete functionality for:

- **Employee Management**: Add, retrieve, and delete employee records
- **Attendance Management**: Mark attendance, retrieve records, filter by date range, and generate attendance summaries
- **Data Validation**: Server-side validation for all operations
- **Error Handling**: Comprehensive error handling with meaningful error messages
- **Dashboard Analytics**: Aggregated attendance data for employee-level insights

The backend follows a structured architecture with clear separation of concerns using the Controller-Service-Repository pattern.

## 🛠️ Tech Stack

| Component | Technology | Version |
|-----------|-----------|----------|
| **Runtime** | Node.js | Latest LTS |
| **Language** | TypeScript | 5.0.0 |
| **Framework** | Express.js | 4.22.1 |
| **Database** | MongoDB | (Cloud/Atlas) |
| **ODM** | Mongoose | 7.8.0 |
| **CORS** | cors | 2.8.6 |
| **Dev Tools** | ts-node-dev | Latest |

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: MongoDB Atlas account

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/96preetis/hrms-lite-backend.git
   cd hrms-lite-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your MongoDB connection string:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   NODE_ENV=development
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   
   The server runs on `http://localhost:3000`

### Available Scripts

```bash
npm run dev              # Development server
npm run build            # Build TypeScript
npm start                # Production server
npm test                 # Run tests
```

## 📡 API Endpoints

### Employees
- `POST /api/employees` - Add employee
- `GET /api/employees` - Get all employees
- `DELETE /api/employees/:id` - Delete employee

### Attendance
- `POST /api/attendance` - Mark attendance
- `GET /api/attendance` - Get all records
- `GET /api/attendance/summary` - Get summary statistics
- `GET /api/attendance/filter?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Filter by date
- `GET /api/attendance/employee/:employeeId` - Get employee records

## 📝 Assumptions & Limitations

### Assumptions
- Employee emails and IDs are unique
- Dates in ISO 8601 format (YYYY-MM-DD)
- Only two attendance statuses: "Present" and "Absent"
- One attendance record per employee per day

### Limitations
- No authentication/authorization
- No rate limiting
- No pagination (all records returned)
- No caching mechanism
- Basic input validation only
- Single process (not horizontally scalable)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/AmazingFeature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/AmazingFeature`
4. Open Pull Request

## 📄 License

MIT License - Open source

## 👤 Author

**Soni** - [@96preetis](https://github.com/96preetis)

---

**Last Updated**: February 2026 | **Status**: Active Development
