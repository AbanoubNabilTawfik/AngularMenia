import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees()
  {
    return [
      {"name":"Ahmed Mohammed","age":25},
      {"name":"Mostafa Mohamed","age":30},
      {"name":"Asmaa Mohamed","age":35}
    ]
  }
}
