import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-structure-directives',
  templateUrl: './ng-for-structure-directives.component.html',
  styleUrls: ['./ng-for-structure-directives.component.scss']
})
export class NgForStructureDirectivesComponent implements OnInit {

  constructor() { }

  cars=["Tibo","KIA","Logan"];

  ngOnInit(): void {
  }

}
