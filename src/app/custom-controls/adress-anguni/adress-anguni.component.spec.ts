import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressAnguniComponent } from './adress-anguni.component';

describe('AdressAnguniComponent', () => {
  let component: AdressAnguniComponent;
  let fixture: ComponentFixture<AdressAnguniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdressAnguniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdressAnguniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
