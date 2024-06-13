import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericControlsComponent } from './generic-controls.component';

describe('FormgroupBaseComponent', () => {
  let component: GenericControlsComponent;
  let fixture: ComponentFixture<GenericControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
