import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormNavnRolleTwoComponent } from './at-form-navn-rolle-two.component';

describe('AtFormNavnRolleTwoComponent', () => {
  let component: AtFormNavnRolleTwoComponent;
  let fixture: ComponentFixture<AtFormNavnRolleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtFormNavnRolleTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtFormNavnRolleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
