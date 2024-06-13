import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person2ControlComponent } from './person2-control.component';

describe('Person2ControlComponent', () => {
  let component: Person2ControlComponent;
  let fixture: ComponentFixture<Person2ControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Person2ControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Person2ControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
