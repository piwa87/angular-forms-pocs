import { Component, Input } from '@angular/core';
import { AtFormAbstractBase } from './at-form-abstract-base';

@Component({ template: '' })
export abstract class MultipleFieldBase extends AtFormAbstractBase {
  @Input({ required: true }) fgName: string = '';

  getErrorsFormGroup(fgName: string): string | null {
    if (this.errors) {
      const fcSpecificErrors = this.errors?.[fgName];
      console.log(`[FormGroup] errors in '${fgName}'`, this.errors?.[fgName]);

      if (this.errors?.[fgName]) {
        return this.getErrorMessageByCode(
          Object.keys(fcSpecificErrors)[0] ?? ''
        );
      }
    }
    return null;
  }
}
