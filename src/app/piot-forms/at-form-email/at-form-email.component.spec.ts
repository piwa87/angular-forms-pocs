import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormEmailComponent } from './at-form-email.component';

describe('AtFormEmailComponent', () => {
  let component: AtFormEmailComponent;
  let fixture: ComponentFixture<AtFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtFormEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
