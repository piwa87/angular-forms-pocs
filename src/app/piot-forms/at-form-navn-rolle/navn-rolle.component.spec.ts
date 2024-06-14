import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormNavnRolleComponent } from './navn-rolle.component';

describe('NavnRolleComponent', () => {
  let component: AtFormNavnRolleComponent;
  let fixture: ComponentFixture<AtFormNavnRolleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtFormNavnRolleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtFormNavnRolleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
