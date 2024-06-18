import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTextInputComponent } from './at-text-input.component';

describe('AtTextInputComponent', () => {
  let component: AtTextInputComponent;
  let fixture: ComponentFixture<AtTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtTextInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
