import { Component } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CannotBeNegativeValidator } from '../../custom-controls/custom-control-base/custom-vallidators';
import { MultipleFieldBase } from '../base-classes/multiple-field-base';

@Component({
  selector: 'at-form-dansk-adresse',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './at-form-dansk-adresse.component.html',
  styleUrl: './at-form-dansk-adresse.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormDanskAdresseComponent extends MultipleFieldBase {}

export const DanskAdresseForm = new FormGroup({
  vejnavn: new FormControl<string | null>('', [
    Validators.required,
    Validators.minLength(4),
  ]),
  husnummer: new FormControl<number | null>(null, [
    CannotBeNegativeValidator,
    Validators.required,
  ]),
  postnummer: new FormControl<string | null>(null, [
    Validators.pattern('^[0-9]{4}$'),
    Validators.required,
  ]),
  by: new FormControl<string | null>(''),
});
