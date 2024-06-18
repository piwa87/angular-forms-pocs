import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { MultipleFieldBaseClass } from '../base-classes/multiple-field-base';

@Component({
  selector: 'at-form-navn-rolle',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, CommonModule],
  templateUrl: './navn-rolle.component.html',
  styleUrl: './navn-rolle.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormNavnRolleComponent extends MultipleFieldBaseClass {}

export const NavnRolleForm = new FormGroup({
  navn: new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(4),
  ]),
  rolle: new FormControl<string | null>(null, [Validators.required]),
});
