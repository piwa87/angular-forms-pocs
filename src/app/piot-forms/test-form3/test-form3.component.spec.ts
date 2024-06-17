import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForm3Component } from './test-form3.component';

describe('TestForm3Component', () => {
  let component: TestForm3Component;
  let fixture: ComponentFixture<TestForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestForm3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
