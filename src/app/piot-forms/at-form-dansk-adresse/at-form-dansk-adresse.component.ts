import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KnownValidationErrors } from '../../custom-controls/custom-control-base/custom-vallidators';

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
export class AtFormDanskAdresseComponent {
  @Input({ required: true }) fc: string = '';
  @Input({ required: true }) errors: ValidationErrors | null = null;

  getErrorMessage(formControlName: string): string | null {
    if (this.errors) {
      const formControlSpecificErrors = this.errors?.[formControlName];
      console.log(`errors for '${formControlName}'`, formControlSpecificErrors);

      if (formControlSpecificErrors) {
        return this.getErrorMessageByCode(
          Object.keys(formControlSpecificErrors)[0] ?? ''
        );
      }
    }
    return null;
  }

  getErrorMessageByCode(errorCode: string): string {
    const knownError = KnownValidationErrors.find(
      (error) => error.code === errorCode
    );
    return knownError ? knownError.message : 'Ukendt fejl';
  }
}
