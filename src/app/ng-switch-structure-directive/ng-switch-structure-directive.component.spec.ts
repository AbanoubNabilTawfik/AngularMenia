import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchStructureDirectiveComponent } from './ng-switch-structure-directive.component';

describe('NgSwitchStructureDirectiveComponent', () => {
  let component: NgSwitchStructureDirectiveComponent;
  let fixture: ComponentFixture<NgSwitchStructureDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchStructureDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchStructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
