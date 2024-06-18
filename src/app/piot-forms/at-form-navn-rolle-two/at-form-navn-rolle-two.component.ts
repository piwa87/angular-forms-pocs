import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { CommonModule } from '@angular/common';
import { CustomControlComplexBaseDirective } from '../../custom-controls/custom-control-base/custom-control-complex-base.directive';

@Component({
  selector: 'at-form-navn-rolle-two',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, CommonModule],
  templateUrl: './at-form-navn-rolle-two.component.html',
  styleUrl: './at-form-navn-rolle-two.component.scss',
  // viewProviders: [
  //   {
  //     provide: ControlContainer,
  //     useExisting: FormGroupDirective,
  //   },
  // ],
})
export class AtFormNavnRolleTwoComponent extends CustomControlComplexBaseDirective {}
