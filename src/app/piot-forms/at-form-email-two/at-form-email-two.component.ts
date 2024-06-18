import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PiotBaseClass } from '../piot-base.class';

@Component({
  selector: 'at-form-email-two',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './at-form-email-two.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormEmailTwoComponent extends PiotBaseClass {}

export const EmailFormTwo = new FormControl<string | null>('', [
  Validators.required,
  Validators.minLength(3),
  Validators.email,
]);
