import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { CustomControlComplexBaseDirective } from '../../custom-controls/custom-control-base/custom-control-complex-base.directive';

@Component({
  selector: 'at-form-navn-rolle',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './navn-rolle.component.html',
  styleUrl: './navn-rolle.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormNavnRolleComponent extends CustomControlComplexBaseDirective {
  parentForm = inject(FormGroupDirective);
  navnRolleGroup: FormGroup = this.parentForm.form;
}
