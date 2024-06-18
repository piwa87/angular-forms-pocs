import { Component, Input } from '@angular/core';
import { AtFormAbstractBase } from './at-form-abstract-base';

@Component({ template: '' })
export abstract class SingleFieldBase extends AtFormAbstractBase {
  @Input({ required: true }) fcName: string = '';

  getErrorsFormControl(fcName: string): string | null {
    console.log(`[FormControl] errors in '${fcName}'`, this.errors);

    if (this.errors) {
      return this.getErrorMessageByCode(Object.keys(this.errors)[0] ?? '');
    }
    return null;
  }
}
