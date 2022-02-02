import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-structure-directive',
  templateUrl: './ng-switch-structure-directive.component.html',
  styleUrls: ['./ng-switch-structure-directive.component.scss']
})
export class NgSwitchStructureDirectiveComponent implements OnInit {

  constructor() { }
  car:string="Verna";

  ngOnInit(): void {
  }

}
