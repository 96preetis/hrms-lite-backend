import { Schema, model, Document, Types } from 'mongoose';

export interface IAttendance extends Document {
  employee: Types.ObjectId;
  date: Date;
  status: 'Present' | 'Absent';
}

const AttendanceSchema = new Schema<IAttendance>({
  employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Present', 'Absent'], required: true },
}, { timestamps: true });

AttendanceSchema.index({ employee: 1, date: 1 }, { unique: true });

export const Attendance = model<IAttendance>('Attendance', AttendanceSchema);
