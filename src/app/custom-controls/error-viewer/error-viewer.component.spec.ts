import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorViewerComponent } from './error-viewer.component';

describe('ErrorViewerComponent', () => {
  let component: ErrorViewerComponent;
  let fixture: ComponentFixture<ErrorViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
