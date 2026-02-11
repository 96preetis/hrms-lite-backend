import { AttendanceRepository } from '../repositories/AttendanceRepository';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { IAttendance } from '../models/Attendance';
import { AppError, ValidationError, NotFoundError } from '../utils/errors';
import { Types } from 'mongoose';

export class AttendanceService {
  private repo = new AttendanceRepository();
  private employeeRepo = new EmployeeRepository();

  async markAttendance(employeeId: string, date: Date, status: 'Present' | 'Absent') {
    if (!employeeId || !date || !status) {
      throw new ValidationError('All fields are required');
    }
    const employee = await this.employeeRepo.findByEmployeeId(employeeId);
    if (!employee) throw new NotFoundError('Employee not found');
    return this.repo.markAttendance({ employee: employee._id, date, status });
  }

  async getAttendanceByEmployee(employeeId: string) {
    const employee = await this.employeeRepo.findByEmployeeId(employeeId);
    if (!employee) throw new NotFoundError('Employee not found');
    return this.repo.findByEmployee(employee._id);
  }

  async getAllAttendance() {
    return this.repo.findAll();
  }

  async getAttendanceByDateRange(startDate: string, endDate: string) {
    if (!startDate || !endDate) {
      throw new ValidationError('Start date and end date are required');
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      throw new ValidationError('Start date must be before end date');
    }
    return this.repo.findByDateRange(start, end);
  }

  async getAttendanceSummary() {
    return this.repo.getSummary();
  }
}
