# API Tests & Documentation — EtharaAI HRMS Lite

## Employee Endpoints

### POST /api/employees
- Add new employee
- Body: { employeeId, fullName, email, department }
- Success: 201, { success: true, data: { ...employee } }
- Errors: 400, 409, 500

### GET /api/employees
- List all employees
- Success: 200, { success: true, data: [ ...employees ] }

### DELETE /api/employees/:id
- Delete employee by Mongo _id
- Success: 200, { success: true, data: { ...deletedEmployee } }
- Errors: 404, 500

---

## Attendance Endpoints

### POST /api/attendance
- Mark attendance
- Body: { employeeId, date, status }
- Success: 201, { success: true, data: { ...attendance } }
- Errors: 400, 404, 409, 500

### GET /api/attendance/employee/:employeeId
- Get attendance history for employee
- Success: 200, { success: true, data: [ ...attendance ] }
- Errors: 404, 500

### GET /api/attendance
- List all attendance records
- Success: 200, { success: true, data: [ ...attendance ] }

### GET /api/attendance/filter?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
- Filter attendance records by date range
- Query params: startDate (required), endDate (required)
- Success: 200, { success: true, data: [ ...attendance ] }
- Errors: 400, 500

### GET /api/attendance/summary
- Get attendance summary with totals and per-employee breakdown
- Success: 200, { success: true, data: { totalRecords, presentCount, absentCount, summaryByEmployee } }
- Errors: 500

---

## Error Format
- { success: false, error: { code, message } }

---

## Test Checklist
- [ ] Add employee
- [ ] List employees
- [ ] Delete employee
- [ ] Mark attendance
- [ ] List attendance
- [ ] Get attendance by employee
- [ ] Error cases (validation, not found, duplicate)
