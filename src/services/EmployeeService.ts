import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { IEmployee } from '../models/Employee';
import { AppError, ValidationError, NotFoundError } from '../utils/errors';

export class EmployeeService {
  private repo = new EmployeeRepository();

  async addEmployee(data: Partial<IEmployee>) {
    if (!data.employeeId || !data.fullName || !data.email || !data.department) {
      throw new ValidationError('All fields are required');
    }
    // Additional validation can be added here
    return this.repo.create(data);
  }

  async getAllEmployees() {
    return this.repo.findAll();
  }

  async deleteEmployee(id: string) {
    const deleted = await this.repo.deleteById(id);
    if (!deleted) throw new NotFoundError('Employee not found');
    return deleted;
  }
}
