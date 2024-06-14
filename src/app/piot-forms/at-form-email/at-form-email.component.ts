import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { ErrorViewerComponent } from '../../custom-controls/error-viewer/error-viewer.component';
import { FormErrorModule } from '../at-form-error-directives/form-error.module';

@Component({
  selector: 'at-form-email',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, ErrorViewerComponent],
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
  parentForm = inject(FormGroupDirective);
  // email: FormGroup = this.parentForm.form;
}
