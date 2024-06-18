import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { SingleFieldBase } from '../base-classes/single-field-base';

@Component({
  selector: 'at-form-email',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './at-form-email.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormEmailComponent extends SingleFieldBase {}

export const EmailForm = new FormControl<string | null>(null, [
  Validators.required,
  Validators.minLength(3),
  Validators.email,
]);
