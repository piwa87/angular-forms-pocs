import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../utils/known-validation-errors';

@Component({ template: '' })
export abstract class MultipleFieldBase {
  @Input({ required: true }) fgName: string = '';
  @Input() errors: ValidationErrors | null = null;

  getErrorsFrom(fgName: string): string | null {
    const getErrorMessageByCode = (
      errorCode: string,
      knownErrors: { code: string; message: string }[] = KnownValidationErrors
    ): string =>
      knownErrors.find((error) => error.code === errorCode)?.message ||
      'Ukendt fejl';

    if (this.errors) {
      const fcSpecificErrors = this.errors?.[fgName];
      console.log(`[FormGroup] errors in '${fgName}'`, this.errors?.[fgName]);

      if (this.errors?.[fgName]) {
        return getErrorMessageByCode(Object.keys(fcSpecificErrors)[0] ?? '');
      }
    }
    return null;
  }
}
