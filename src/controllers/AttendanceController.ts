import { Request, Response, NextFunction } from 'express';
import { AttendanceService } from '../services/AttendanceService';

const service = new AttendanceService();

export const markAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { employeeId, date, status } = req.body;
    const attendance = await service.markAttendance(employeeId, new Date(date), status);
    res.status(201).json({ success: true, data: attendance });
  } catch (err) {
    next(err);
  }
};

export const getAttendanceByEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { employeeId } = req.params;
    const records = await service.getAttendanceByEmployee(employeeId);
    res.json({ success: true, data: records });
  } catch (err) {
    next(err);
  }
};

export const getAllAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const records = await service.getAllAttendance();
    res.json({ success: true, data: records });
  } catch (err) {
    next(err);
  }
};

export const getAttendanceByDateRange = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { startDate, endDate } = req.query;
    const records = await service.getAttendanceByDateRange(startDate as string, endDate as string);
    res.json({ success: true, data: records });
  } catch (err) {
    next(err);
  }
};

export const getAttendanceSummary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const summary = await service.getAttendanceSummary();
    res.json({ success: true, data: summary });
  } catch (err) {
    next(err);
  }
};
