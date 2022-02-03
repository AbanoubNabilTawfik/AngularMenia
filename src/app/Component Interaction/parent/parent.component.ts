import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  @ViewChild(ChildComponent) child :ChildComponent;

  fullName:string="Salma Osama";
  messageFromChild:string;

  ngOnInit(): void {
    //console.log(this.child.showMessage())
  }

  ngAfterViewInit()
  {
    this.child.showMessage();
  }

  showMessage()
  {
    this.child.showMessage();
  }

}
