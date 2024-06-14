import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormDanskAdresseComponent } from './at-form-dansk-adresse.component';

describe('AtFormDanskAdresseComponent', () => {
  let component: AtFormDanskAdresseComponent;
  let fixture: ComponentFixture<AtFormDanskAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtFormDanskAdresseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtFormDanskAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
