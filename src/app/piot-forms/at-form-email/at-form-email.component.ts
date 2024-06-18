import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { SingleFieldBaseClass } from '../base-classes/single-field-base';
import { ValidationErrorCode } from '../utils/custom-vallidators';

@Component({
  selector: 'at-form-email',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './at-form-email.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormEmailComponent extends SingleFieldBaseClass {}

export const EmailForm = new FormControl<string | null>(null, [
  Validators.required,
  Validators.minLength(3),
  Validators.email,
]);

export const EmailValidationErrors: {
  code: ValidationErrorCode;
  message: string;
}[] = [
  { code: ValidationErrorCode.required, message: 'John er sur' },
  {
    code: ValidationErrorCode.minlength,
    message: 'John er skuffet',
  },
  { code: ValidationErrorCode.email, message: 'John er sulten' },
];
