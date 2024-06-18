import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../utils/known-validation-errors';

@Component({ template: '' })
export abstract class SingleFieldBase {
  @Input({ required: true }) fcName: string = '';
  @Input() errors: ValidationErrors | null = null;

  getErrors(): string | null {
    const getErrorMessageByCode = (
      errorCode: string,
      knownErrors: { code: string; message: string }[] = KnownValidationErrors
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
