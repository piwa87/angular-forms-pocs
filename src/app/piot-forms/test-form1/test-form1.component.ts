import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { AtFormNavnRolleComponent } from '../at-form-navn-rolle/navn-rolle.component';
import { CommonModule } from '@angular/common';
import { AtFormDanskAdresseComponent } from '../at-form-dansk-adresse/at-form-dansk-adresse.component';
import { CannotBeNegativeValidator } from '../../custom-controls/custom-control-base/custom-vallidators';
import { AtFormEmailComponent } from '../at-form-email/at-form-email.component';
import { AtFormNavnRolleTwoComponent } from '../at-form-navn-rolle-two/at-form-navn-rolle-two.component';
import { printErrors } from '../../utils/print-errors.util';

interface NavnRolleForm {
  navn: FormControl<string | null>;
  rolle: FormControl<string | null>;
}

interface AdresseGroup {
  vejnavn: FormControl<string | null>;
  husnummer: FormControl<number | null>;
  postnummer: FormControl<string | null>;
  by: FormControl<string | null>;
}

interface MainForm {
  navnRolle100: FormGroup<NavnRolleForm>;
  navnRolle2: FormGroup<NavnRolleForm>;
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
    AtFormNavnRolleTwoComponent,
  ],
  templateUrl: './test-form1.component.html',
})
export class TestForm1Component implements OnInit {
  fb: FormBuilder = inject(FormBuilder);

  mainForm: FormGroup<MainForm> = this.fb.group({
    navnRolle100: this.fb.group({
      navn: ['', [Validators.required, Validators.minLength(4)]],
      rolle: ['', [Validators.minLength(5), Validators.required]],
    }),
    navnRolle2: this.fb.group({
      navn: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(3),
        ]),
      ],
      rolle: ['', [Validators.minLength(5), Validators.required]],
    }),
    adresseGroup: this.fb.group({
      vejnavn: ['', [Validators.required, Validators.minLength(4)]],
      husnummer: ['', [CannotBeNegativeValidator, Validators.required]],
      postnummer: [
        null,
        [Validators.pattern('^[0-9]{4}$'), Validators.required],
      ],
      by: [''],
    }),
    email: ['', [Validators.email, Validators.required]],
  }) as FormGroup<MainForm>;

  adresseErrors: ValidationErrors | null = null;

  ngOnInit(): void {
    this.mainForm.controls.adresseGroup.valueChanges.subscribe((value) => {
      this.adresseErrors = collectErrors(this.mainForm.controls.adresseGroup);
    });
  }

  onSubmit(): void {
    this.adresseErrors = collectErrors(this.mainForm.controls.adresseGroup);
    this.mainForm.markAllAsTouched();
    if (this.mainForm.invalid) {
      console.log('Formularen er ugyldig.');
      printErrors(this.mainForm);
      return;
    }
    console.log('Form valid. Value:', this.mainForm.value);
  }
}

export function collectErrors(
  control: AbstractControl
): ValidationErrors | null {
  if (!control || control.valid) {
    return null;
  }

  let errors: ValidationErrors | null = control.errors || null;

  if (control instanceof FormGroup) {
    Object.keys(control.controls).forEach((key) => {
      const childErrors = collectErrors(control.get(key) as AbstractControl);
      if (childErrors) {
        errors = errors || {};
        errors[key] = childErrors;
      }
    });
  }

  return errors;
}
