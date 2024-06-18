import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../../custom-controls/custom-control-base/custom-vallidators';

@Component({ template: '' })
export abstract class AtFormAbstractBase {
  @Input() errors: ValidationErrors | null = null;

  getErrorMessageByCode(errorCode: string): string {
    const unknownError = 'Ukendt fejl';
    const knownError = KnownValidationErrors.find(
      (error) => error.code === errorCode
    );
    return knownError ? knownError.message : unknownError;
  }
}
