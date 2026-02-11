import { Router } from 'express';
import { addEmployee, getAllEmployees, deleteEmployee } from '../controllers/EmployeeController';

const router = Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);
router.delete('/:id', deleteEmployee);

export default router;
