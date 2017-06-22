import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordingComponent } from './according.component';

describe('AccordingComponent', () => {
  let component: AccordingComponent;
  let fixture: ComponentFixture<AccordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
