import { Employee, IEmployee } from '../models/Employee';

export class EmployeeRepository {
  async create(employee: Partial<IEmployee>) {
    return Employee.create(employee);
  }

  async findAll() {
    return Employee.find();
  }

  async findById(id: string) {
    return Employee.findById(id);
  }

  async findByEmployeeId(employeeId: string) {
    return Employee.findOne({ employeeId });
  }

  async deleteById(id: string) {
    return Employee.findByIdAndDelete(id);
  }
}
