import { Attendance, IAttendance } from '../models/Attendance';
import { Types } from 'mongoose';

export class AttendanceRepository {
  async markAttendance(attendance: Partial<IAttendance>) {
    return Attendance.create(attendance);
  }

  async findByEmployee(employeeId: Types.ObjectId) {
    return Attendance.find({ employee: employeeId }).sort({ date: -1 });
  }

  async findByEmployeeAndDate(employeeId: Types.ObjectId, date: Date) {
    return Attendance.findOne({ employee: employeeId, date });
  }

  async findAll() {
    return Attendance.find().populate('employee');
  }

  async findByDateRange(startDate: Date, endDate: Date) {
    return Attendance.find({
      date: { $gte: startDate, $lte: endDate }
    }).populate('employee').sort({ date: -1 });
  }

  async getSummary() {
    const totalRecords = await Attendance.countDocuments();
    const presentCount = await Attendance.countDocuments({ status: 'Present' });
    const absentCount = await Attendance.countDocuments({ status: 'Absent' });
    
    const summaryByEmployee = await Attendance.aggregate([
      {
        $group: {
          _id: '$employee',
          totalDays: { $sum: 1 },
          presentDays: {
            $sum: { $cond: [{ $eq: ['$status', 'Present'] }, 1, 0] }
          },
          absentDays: {
            $sum: { $cond: [{ $eq: ['$status', 'Absent'] }, 1, 0] }
          }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    return {
      totalRecords,
      presentCount,
      absentCount,
      summaryByEmployee
    };
  }
}
