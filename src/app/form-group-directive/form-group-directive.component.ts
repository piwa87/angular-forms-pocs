import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../material-module';
import { AtFormNavnRolleComponent } from '../piot-forms/at-form-navn-rolle/navn-rolle.component';
import { CommonModule } from '@angular/common';
import { AtFormDanskAdresseComponent } from '../piot-forms/at-form-dansk-adresse/at-form-dansk-adresse.component';
import {
  CannotBeNegativeValidator,
  KnownValidationErrors,
} from '../custom-controls/custom-control-base/custom-vallidators';
import { ErrorViewerComponent } from '../custom-controls/error-viewer/error-viewer.component';

@Component({
  selector: 'app-form-group-directive',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AtFormNavnRolleComponent,
    AtFormDanskAdresseComponent,
    ErrorViewerComponent,
  ],
  templateUrl: './form-group-directive.component.html',
  styleUrl: './form-group-directive.component.scss',
})
export class FormGroupDirectiveComponent {
  fb: FormBuilder = inject(FormBuilder);

  mainForm = this.fb.group({
    navnRolleGroup: this.fb.group({
      navn: ['', Validators.required],
      rolle: [''],
    }),
    adresseGroup: this.fb.group({
      vejnavn: ['', Validators.required],
      husnummer: ['', [CannotBeNegativeValidator, Validators.required]],
      postnummer: [
        null,
        [Validators.pattern('^[0-9]{4}$'), Validators.required],
      ],
      by: [''],
    }),
    email: [''],
  });

  onSubmit(): void {
    if (this.mainForm.invalid) {
      console.log(
        'Formularen er ugyldig. Errors: ',
        this.mainForm.getError('cannotBeNegative', [
          'adresseGroup',
          'husnummer',
        ])
      );
      console.log('ELO', this.getErrors());

      return;
    }
    console.log('ELO', this.mainForm.value);
  }

  getErrors(): ValidationErrors | null {
    return this.mainForm.getError('required', ['navnRolleGroup', 'navn']);
  }
}
