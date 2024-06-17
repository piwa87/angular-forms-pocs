import { Component, Input, inject } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
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
  @Input() override fg!: FormGroup;
  parentForm = inject(FormGroupDirective);
  adresseGroup: FormGroup = this.parentForm.form;
}
