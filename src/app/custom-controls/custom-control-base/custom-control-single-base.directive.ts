import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: 'app-custom-control-base',
  standalone: true,
})
export class CustomControlSingleBaseDirective
  implements ControlValueAccessor, Validator
{
  @Input() errors: ValidationErrors | null = null;
  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;
  validationFunction: Function = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return null;
  };

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setValidationFunction(fn: Function) {
    this.validationFunction = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const valResult = this.validationFunction(control);
    return this.validationFunction(control);
  }

  registerOnValidatorChange(fn: () => void): void {
    console.log('registerOnValidatorChange');
  }
}
