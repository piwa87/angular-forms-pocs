import { Directive, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: 'app-custom-control-base',
  standalone: true,
})
export abstract class CustomControlComplexBaseDirective
  implements ControlValueAccessor
{
  @Input() errors: ValidationErrors | null = null;
  @Input() legend: string = '';

  @Input({ required: true }) fg!: FormGroup;

  onTouched: Function = () => {};

  registerOnChange(onChange: any) {}

  writeValue(value: any): void {}

  registerOnTouched(onTouched: any): void {}
}
