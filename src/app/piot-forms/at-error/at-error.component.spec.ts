import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtErrorComponent } from './at-error.component';

describe('AtErrorComponent', () => {
  let component: AtErrorComponent;
  let fixture: ComponentFixture<AtErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
