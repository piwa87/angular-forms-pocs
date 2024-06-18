import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../utils/known-validation-errors';

@Component({ template: '' })
export abstract class MultipleFieldBaseClass {
  @Input({ required: true }) fgName: string = '';
  @Input() errors: ValidationErrors | null = null;

  getErrorsFrom(fgName: string): string | null {
    const getErrorMessageFromCode = (
      errorCode: string,
      knownErrors: { code: string; message: string }[] = KnownValidationErrors
    ): string =>
      knownErrors.find((error) => error.code === errorCode)?.message ||
      'Ukendt fejl';

    if (this.errors) {
      const fcSpecificErrors = this.errors?.[fgName];

      if (this.errors?.[fgName]) {
        return getErrorMessageFromCode(Object.keys(fcSpecificErrors)[0] ?? '');
      }
    }
    return null;
  }
}
