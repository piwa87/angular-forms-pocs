import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonControlComponent } from './person-control.component';

describe('PersonControlComponent', () => {
  let component: PersonControlComponent;
  let fixture: ComponentFixture<PersonControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
