import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForm1Component } from './test-form1.component';

describe('FormGroupDirectiveComponent', () => {
  let component: TestForm1Component;
  let fixture: ComponentFixture<TestForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestForm1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TestForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
