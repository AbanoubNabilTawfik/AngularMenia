import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/Departments',pathMatch:'full'},
  {path:'Employees',component:EmployeesComponent},
  {path:'Departments',component:DepartmentsComponent},
  {path:'Department/:id',component:DepartmentDetailsComponent,
   children:[
     {path:'overview',component:DepartmentOverviewComponent},
     {path:'contact',component:DepartmentContactComponent}
   ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
