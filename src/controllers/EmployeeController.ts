import { Request, Response, NextFunction } from 'express';
import { EmployeeService } from '../services/EmployeeService';

const service = new EmployeeService();

export const addEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employee = await service.addEmployee(req.body);
    res.status(201).json({ success: true, data: employee });
  } catch (err) {
    next(err);
  }
};

export const getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await service.getAllEmployees();
    res.json({ success: true, data: employees });
  } catch (err) {
    next(err);
  }
};

export const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await service.deleteEmployee(req.params.id);
    res.json({ success: true, data: deleted });
  } catch (err) {
    next(err);
  }
};
