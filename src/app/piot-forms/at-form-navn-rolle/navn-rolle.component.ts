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
import { CustomControlComplexBaseDirective } from '../../custom-controls/custom-control-base/custom-control-complex-base.directive';
import { CommonModule } from '@angular/common';
import { ErrorViewerComponent } from '../../custom-controls/error-viewer/error-viewer.component';

@Component({
  selector: 'at-form-navn-rolle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    ErrorViewerComponent,
  ],
  templateUrl: './navn-rolle.component.html',
  styleUrl: './navn-rolle.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormNavnRolleComponent {
  @Input({ required: true }) fc: string = '';
}

export const NavnRolleForm = new FormGroup({
  navn: new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(4),
  ]),
  rolle: new FormControl<string | null>(null, [Validators.required]),
});
