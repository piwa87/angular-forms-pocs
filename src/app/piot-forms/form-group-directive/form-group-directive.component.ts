import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { AtFormNavnRolleComponent } from '../at-form-navn-rolle/navn-rolle.component';
import { CommonModule } from '@angular/common';
import { AtFormDanskAdresseComponent } from '../at-form-dansk-adresse/at-form-dansk-adresse.component';
import {
  CannotBeNegativeValidator,
  MustContainNameValidator,
} from '../../custom-controls/custom-control-base/custom-vallidators';
import { AtFormEmailComponent } from '../at-form-email/at-form-email.component';

interface NavnRolleForm {
  navn: FormControl<string>;
  rolle: FormControl<string | null>;
}

interface AdresseGroup {
  vejnavn: FormControl<string | null>;
  husnummer: FormControl<number | null>;
  postnummer: FormControl<string | null>;
  by: FormControl<string | null>;
}

interface MainForm {
  navnRolleGroup: FormGroup<NavnRolleForm>;
  adresseGroup: FormGroup<AdresseGroup>;
  email: FormControl<string | null>;
}

@Component({
  selector: 'app-form-group-directive',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AtFormNavnRolleComponent,
    AtFormDanskAdresseComponent,
    AtFormEmailComponent,
  ],
  templateUrl: './form-group-directive.component.html',
  styleUrl: './form-group-directive.component.scss',
})
export class FormGroupDirectiveComponent {
  fb: FormBuilder = inject(FormBuilder);

  mainForm: FormGroup<MainForm> = this.fb.group({
    navnRolleGroup: this.fb.group({
      navn: ['', [Validators.required, Validators.minLength(4)]],
      rolle: ['', [Validators.minLength(5), Validators.required]],
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
    email: ['', [Validators.email, Validators.required]],
  }) as FormGroup<MainForm>;

  onSubmit(): void {
    if (this.mainForm.invalid) {
      console.log('Formularen er ugyldig.');

      return;
    }
    console.log('Form valid. Value:', this.mainForm.value);
  }
}
