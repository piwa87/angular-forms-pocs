import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtSelect2Component } from './at-select2.component';

describe('AtSelect2Component', () => {
  let component: AtSelect2Component;
  let fixture: ComponentFixture<AtSelect2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtSelect2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
