import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../../custom-controls/custom-control-base/custom-vallidators';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'at-error',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './at-error.component.html',
  styleUrl: './at-error.component.scss',
})
export class AtErrorComponent {
  @Input({ required: true }) errors: ValidationErrors | null = null;
  @Input() fc = '';

  knownErrors = KnownValidationErrors;

  constructor() {
    console.log('KnownValidationErrors', KnownValidationErrors);
    console.log('errors', this.errors);
  }

  getErrorMessage(errorCode: string): string | null {
    const specificErrors = this.errors?.[errorCode];
    if (specificErrors) {
      console.log('XOXOXOXXO this.errors', specificErrors);
      return specificErrors;
    }
    return null;
  }

  getErrorMessage2(errors: ValidationErrors | null): string | null {
    if (errors) {
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const knownError = this.knownErrors.find(
            (error) => error.code === key
          );
          if (knownError) {
            return knownError.message;
          }
        }
      }
      return 'There are some errors';
    }
    return null;
  }
}
