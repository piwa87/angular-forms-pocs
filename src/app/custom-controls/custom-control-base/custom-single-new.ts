import { Directive, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Directive({
  standalone: true,
})
export class CustomSingleNewBase implements ControlValueAccessor {
  @Input({ required: true }) formControl!: FormControl;
  writeValue(value: any): void {}
  registerOnChange(onChange: any): void {}
  registerOnTouched(onTouched: any): void {}
}
