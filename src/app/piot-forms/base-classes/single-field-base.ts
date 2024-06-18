import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../utils/known-validation-errors';

@Component({ template: '' })
export abstract class SingleFieldBaseClass {
  @Input({ required: true }) fcName: string = '';
  @Input() errors: ValidationErrors | null = null;

  getErrors(): string | null {
    const getErrorMessageFromCode = (
      errorCode: string,
      knownErrors: { code: string; message: string }[] = KnownValidationErrors
    ): string =>
      knownErrors.find((error) => error.code === errorCode)?.message ||
      'Ukendt fejl';

    if (this.errors) {
      return getErrorMessageFromCode(Object.keys(this.errors)[0] ?? '');
    }
    return null;
  }
}
