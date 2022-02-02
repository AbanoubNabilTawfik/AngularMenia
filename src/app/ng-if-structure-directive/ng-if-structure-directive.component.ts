import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-structure-directive',
  templateUrl: './ng-if-structure-directive.component.html',
  styleUrls: ['./ng-if-structure-directive.component.scss']
})
export class NgIfStructureDirectiveComponent implements OnInit {

  constructor() { }

  displayWelcomeMessage:boolean=false;
  isLoggedIn:boolean=true;
  fullName:string="Mohamed Ahmed"

  ngOnInit(): void {
  }

}
