import { Component, Input, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { CommonModule } from '@angular/common';
import { ErrorViewerComponent } from '../../custom-controls/error-viewer/error-viewer.component';

@Component({
  selector: 'at-form-email',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    ErrorViewerComponent,
  ],
  templateUrl: './at-form-email.component.html',
  styleUrl: './at-form-email.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormEmailComponent {
  @Input({ required: true }) fc: string = '';
  @Input({ required: true }) errors: ValidationErrors | null = null;
}

export const EmailForm = new FormControl<string | null>(null, [
  Validators.required,
  Validators.minLength(2),
  Validators.email,
]);
