import { Component, Directive, Input, OnDestroy, inject } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'app-custom-control-base',
  standalone: true,
})
export abstract class CustomControlComplexBaseDirective
  implements ControlValueAccessor, Validator, OnDestroy
{
  @Input() errors: ValidationErrors | null = null;
  @Input() legend: string = '';

  fb = inject(FormBuilder);

  @Input({ required: true }) fg!: FormGroup;
  // fg: FormGroup<any> = this.fb.group({});

  onChangeSubs: Subscription[] = [];

  onTouched: Function = () => {};

  ngOnDestroy() {
    this.onChangeSubs.forEach((sub) => sub.unsubscribe());
  }

  registerOnChange(onChange: any) {
    const sub = this.fg.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  writeValue(value: any): void {
    if (value) {
      this.fg.setValue(value, { emitEvent: false });
    }
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(disabled: boolean): void {
    if (disabled) {
      this.fg.disable();
    } else {
      this.fg.enable();
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.fg.valid) {
      return null;
    }

    let errors: any = {};

    for (const key in this.fg.controls) {
      const keyString = key.toString();
      errors = this.addControlErrors(errors, keyString);
    }

    console.log('[COMPLEX BASE] validate', errors);
    return errors;
  }

  addControlErrors(allErrors: any, controlName: string) {
    const errors = { ...allErrors };
    const controlErrors = this.fg.controls[controlName].errors;
    if (controlErrors) {
      errors[controlName] = controlErrors;
    }
    return errors;
  }
}
