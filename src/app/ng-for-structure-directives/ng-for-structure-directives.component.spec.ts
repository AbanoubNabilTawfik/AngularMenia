import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForStructureDirectivesComponent } from './ng-for-structure-directives.component';

describe('NgForStructureDirectivesComponent', () => {
  let component: NgForStructureDirectivesComponent;
  let fixture: ComponentFixture<NgForStructureDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForStructureDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForStructureDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
