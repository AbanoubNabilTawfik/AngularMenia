import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private enrollment:EnrollmentService) { }
  topics=["Angular","React","NodeJS"];
  userModel:User=new User("","abnabil@iti.gov.eg","","Angular","Morning",true);

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.userModel);
    this.enrollment.enroll(this.userModel).subscribe(res=>
      {
        console.log("success",res);
      },
      error=>
      {
       console.log("error",error);
      })

  }

}
