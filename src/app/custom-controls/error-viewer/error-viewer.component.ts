import { Component, Input } from '@angular/core';
import { KnownValidationErrors } from '../custom-control-base/custom-vallidators';
import { MatSelectModule } from '@angular/material/select';
import { ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-viewer',
  standalone: true,
  imports: [MatSelectModule, CommonModule],
  templateUrl: './error-viewer.component.html',
  styleUrl: './error-viewer.component.scss',
})
export class ErrorViewerComponent {
  @Input({ required: true }) errors: ValidationErrors | null = null;

  knownErrors = KnownValidationErrors;

  constructor() {
    console.log('KnownValidationErrors', KnownValidationErrors);
    console.log('errors', this.errors);
  }

  hasKnownErrors(
    errors: ValidationErrors | null,
    knownErrors: { code: string; message: string }[]
  ): boolean {
    return knownErrors.some((knownError) =>
      errors?.hasOwnProperty(knownError.code)
    );
  }
}
