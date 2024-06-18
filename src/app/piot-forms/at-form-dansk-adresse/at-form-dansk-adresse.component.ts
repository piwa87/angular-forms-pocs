import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  CannotBeNegativeValidator,
  KnownValidationErrors,
} from '../../custom-controls/custom-control-base/custom-vallidators';
import { PiotBaseClass } from '../piot-base.class';

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
export class AtFormDanskAdresseComponent extends PiotBaseClass {
  // @Input({ required: true }) fc: string = '';
  // @Input({ required: true }) errors: ValidationErrors | null = null;
  // getErrorMessage(formControlName: string): string | null {
  //   if (this.errors) {
  //     const formControlSpecificErrors = this.errors?.[formControlName];
  //     console.log(`errors for '${formControlName}'`, formControlSpecificErrors);
  //     if (formControlSpecificErrors) {
  //       return this.getErrorMessageByCode(
  //         Object.keys(formControlSpecificErrors)[0] ?? ''
  //       );
  //     }
  //   }
  //   return null;
  // }
  // getErrorMessageByCode(errorCode: string): string {
  //   const knownError = KnownValidationErrors.find(
  //     (error) => error.code === errorCode
  //   );
  //   return knownError ? knownError.message : 'Ukendt fejl';
  // }
}

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
