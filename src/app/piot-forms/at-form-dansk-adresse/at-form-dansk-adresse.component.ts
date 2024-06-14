import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { ErrorViewerComponent } from '../../custom-controls/error-viewer/error-viewer.component';
import { CustomControlComplexBaseDirective } from '../../custom-controls/custom-control-base/custom-control-complex-base.directive';

@Component({
  selector: 'at-form-dansk-adresse',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, ErrorViewerComponent],
  templateUrl: './at-form-dansk-adresse.component.html',
  styleUrl: './at-form-dansk-adresse.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormDanskAdresseComponent extends CustomControlComplexBaseDirective {
  parentForm = inject(FormGroupDirective);
  adresseGroup: FormGroup = this.parentForm.form;

  getAdresseGroupErrors(): ValidationErrors | null {
    return this.adresseGroup.errors;
  }
}
