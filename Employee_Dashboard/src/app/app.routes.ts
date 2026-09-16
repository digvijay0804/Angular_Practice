import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { EmployeeCard } from './components/employee-card/employee-card';
import { EmployeeList } from './components/employee-list/employee-list';    
import { EmployeeForm } from './components/employee-form/employee-form';


export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'employee/:id', component: EmployeeCard },
  { path: 'employees', component: EmployeeList },
  { path: 'employee/new', component: EmployeeForm }
];
