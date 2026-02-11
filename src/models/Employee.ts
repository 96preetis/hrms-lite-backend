import { Schema, model, Document } from 'mongoose';

export interface IEmployee extends Document {
  employeeId: string;
  fullName: string;
  email: string;
  department: string;
}

const EmployeeSchema = new Schema<IEmployee>({
  employeeId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
}, { timestamps: true });

export const Employee = model<IEmployee>('Employee', EmployeeSchema);
