import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employeeList:any;
  errorMsg:any;
  ngOnInit(): void {
   // this.employeeList=this.employeeService.getEmployees();
   this.employeeService.getEmployees().subscribe(
     data=>
     {
       this.employeeList=data;
     },
     errorData=>
     {
       this.errorMsg=errorData;
     }
   )
  }

}
