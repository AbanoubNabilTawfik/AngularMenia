import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //@Input()parentName:string;

  @Input('parentName') fullName:string;
  @Output() childEvent=new EventEmitter();

  sendData()
  {
    this.childEvent.emit("Hello Salma from child component");
  }

  constructor() { }

  showMessage()
  {
    console.log("Hello im child");
  }

  ngOnInit(): void {
  }

}
