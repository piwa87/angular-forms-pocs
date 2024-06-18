import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../custom-controls/custom-control-base/custom-vallidators';

@Component({ template: '' })
export abstract class PiotBaseClass {
  @Input({ required: true }) fc: string = '';
  @Input({ required: true }) errors: ValidationErrors | null = null;
  getErrorMessage(formControlName: string): string | null {
    console.log('incoming errors in ' + formControlName, this.errors);

    if (this.errors) {
      const formControlSpecificErrors = this.errors?.[formControlName];
      console.log(`errors for '${formControlName}'`, formControlSpecificErrors);

      if (formControlSpecificErrors) {
        return this.getErrorMessageByCode(
          Object.keys(formControlSpecificErrors)[0] ?? ''
        );
      }
    }
    return null;
  }

  getErrorMessageByCode(errorCode: string): string {
    const knownError = KnownValidationErrors.find(
      (error) => error.code === errorCode
    );
    return knownError ? knownError.message : 'Ukendt fejl';
  }
}
