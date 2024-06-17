import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validator,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { CustomControlComplexBaseDirective } from '../custom-control-base/custom-control-complex-base.directive';
import {
  updateFormControlTree,
  validateFormControlTree,
} from '../custom-control-base/update-form-control-tree';

@Component({
  selector: 'app-address-anguni',
  standalone: true,
  templateUrl: './address-anguni.component.html',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressAnguniComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AddressAnguniComponent,
    },
  ],
})
// implements ControlValueAccessor, OnDestroy, Validator
export class AddressAnguniComponent
  extends CustomControlComplexBaseDirective
  implements OnInit
{
  onChange = (value: any) => {};

  // @Input() legend: string = '';
  // @Input({ required: true }) fg!: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {
    //   this.fg.markAllAsTouched = () => {
    //     updateFormControlTree(this.fg);
    //     validateFormControlTree(this.fg);
    //   };
  }

  // onTouchedAndChange() {
  //   this.onTouched();
  //   this.onChange(this.fg.value);
  // }
}

export const AddressForm = new FormGroup({
  addressLine1: new FormControl<string | null>(null, [Validators.required]),
  addressLine2: new FormControl<string | null>(null, [Validators.required]),
  zipCode: new FormControl<number | null>(null, [Validators.required]),
  city: new FormControl<string | null>(null, [Validators.required]),
});
