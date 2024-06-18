import { Component, Input, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { CommonModule } from '@angular/common';
import { PiotBaseClass } from '../piot-base.class';
import { KnownValidationErrors } from '../../custom-controls/custom-control-base/custom-vallidators';

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
export class AtFormNavnRolleComponent extends PiotBaseClass {
  // @Input({ required: true }) fc: string = '';
  // @Input({ required: true }) errors: any = null;
  // getErrorMessage(formControlName: string): string | null {
  //   console.log('incoming errors in ' + formControlName, this.errors);
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

export const NavnRolleForm = new FormGroup({
  navn: new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(4),
  ]),
  rolle: new FormControl<string | null>(null, [Validators.required]),
});
