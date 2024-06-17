import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtRadioGroupComponent } from './at-radio-group.component';

describe('AtRadioGroupComponent', () => {
  let component: AtRadioGroupComponent;
  let fixture: ComponentFixture<AtRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtRadioGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
