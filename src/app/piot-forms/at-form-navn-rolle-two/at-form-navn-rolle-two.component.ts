import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { CommonModule } from '@angular/common';
import { ErrorViewerComponent } from '../../custom-controls/error-viewer/error-viewer.component';
import { CustomControlComplexBaseDirective } from '../../custom-controls/custom-control-base/custom-control-complex-base.directive';

@Component({
  selector: 'at-form-navn-rolle-two',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    ErrorViewerComponent,
  ],
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
