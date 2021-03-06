import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  employeeList:any;
  errorMsg:any;
  constructor(private employeeService:EmployeeService) {

   }

  ngOnInit(): void {
    //this.employeeList=this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(
      employeeData=>
      {
        this.employeeList=employeeData;
      },
      error=>
      {
        this.errorMsg=error;
      }
      )

  }

}
