import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router :Router,private activatedRoute:ActivatedRoute) { }
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"ReactJS"},
    {"id":3,"name":"MnogoDB"},
    {"id":4,"name":"NodeJS"}
  ]
  deptId:any;

  goToDepartment(dept:any)
  {
   //navigate to department details and send id in the url
   this.router.navigate(["/Department",dept.id]);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.deptId=params.get("id");
    })
    //alert(this.deptId)
  }

  isSelected(dept:any)
  {
    return  parseInt(dept.id)===parseInt(this.deptId);
  }

 

}
