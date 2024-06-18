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
import { SingleFieldBase } from '../base-classes/single-field-base';
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
export class AtFormEmailComponent extends SingleFieldBase {
  override getErrors(): string | null {
    const getErrorMessageByCode = (
      errorCode: string,
      knownErrors = EmailValidationErrors
    ): string =>
      knownErrors.find((error) => error.code === errorCode)?.message ||
      'Ukendt fejl';

    console.log(`[FormControl] errors in '${this.fcName}'`, this.errors);

    if (this.errors) {
      return getErrorMessageByCode(Object.keys(this.errors)[0] ?? '');
    }
    return null;
  }
}

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
