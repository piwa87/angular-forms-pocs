import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  selector: 'at-text-input',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './at-text-input.component.html',
  styleUrl: './at-text-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtTextInputComponent extends SingleFieldBaseClass {
  @Input() label: string = '';

  override getErrors(): string | null {
    const getErrorMessageByCode = (
      errorCode: string,
      knownErrors = CustomValidationErrors
    ): string =>
      knownErrors.find((error) => error.code === errorCode)?.message ||
      'Ukendt fejl';
    if (this.errors) {
      return getErrorMessageByCode(Object.keys(this.errors)[0] ?? '');
    }
    return null;
  }
}
export const AtTextForm = new FormControl<string | null>(null, [
  Validators.required,
  Validators.minLength(4),
]);

export const CustomValidationErrors: {
  code: ValidationErrorCode;
  message: string;
}[] = [
  { code: ValidationErrorCode.required, message: '[custom] Udfyld teksten' },
  {
    code: ValidationErrorCode.minlength,
    message: '[custom] Teksten er for kort',
  },
];
