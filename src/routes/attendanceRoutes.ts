import { Router } from 'express';
import { markAttendance, getAttendanceByEmployee, getAllAttendance, getAttendanceByDateRange, getAttendanceSummary } from '../controllers/AttendanceController';

const router = Router();

router.post('/', markAttendance);
router.get('/summary', getAttendanceSummary);
router.get('/filter', getAttendanceByDateRange);
router.get('/employee/:employeeId', getAttendanceByEmployee);
router.get('/', getAllAttendance);

export default router;
