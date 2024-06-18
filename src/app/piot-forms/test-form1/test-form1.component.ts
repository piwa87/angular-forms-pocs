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
import {
  AtFormNavnRolleComponent,
  NavnRolleForm,
} from '../at-form-navn-rolle/navn-rolle.component';
import { CommonModule } from '@angular/common';
import {
  DanskAdresseForm,
  AtFormDanskAdresseComponent,
} from '../at-form-dansk-adresse/at-form-dansk-adresse.component';
import {
  AtFormEmailComponent,
  EmailForm,
} from '../at-form-email/at-form-email.component';
import { printErrors } from '../utils/print-errors.util';
import {
  AtTextForm,
  AtTextInputComponent,
} from '../at-text-input/at-text-input.component';

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
  navnRolleGroup: FormGroup<NavnRolleForm>;
  adresseGroup: FormGroup<AdresseGroup>;
  email: FormControl<string | null>;
  fritekst: FormControl<string | null>;
}

@Component({
  selector: 'app-test-form1',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AtFormNavnRolleComponent,
    AtFormDanskAdresseComponent,
    AtFormEmailComponent,
    AtTextInputComponent,
  ],
  templateUrl: './test-form1.component.html',
})
export class TestForm1Component implements OnInit {
  fb: FormBuilder = inject(FormBuilder);

  testForm1: FormGroup<MainForm> = this.fb.group({
    navnRolleGroup: NavnRolleForm,
    adresseGroup: DanskAdresseForm,
    email: EmailForm,
    fritekst: AtTextForm,
  }) as FormGroup<MainForm>;

  navnRolleErrors: ValidationErrors | null = null;
  adresseErrors: ValidationErrors | null = null;

  ngOnInit(): void {
    this.testForm1.controls.navnRolleGroup.valueChanges.subscribe((value) => {
      this.navnRolleErrors = collectErrors(
        this.testForm1.controls.navnRolleGroup
      );
    });
    this.testForm1.controls.adresseGroup.valueChanges.subscribe((value) => {
      this.adresseErrors = collectErrors(this.testForm1.controls.adresseGroup);
    });
  }

  onSubmit(): void {
    this.navnRolleErrors = collectErrors(
      this.testForm1.controls.navnRolleGroup
    );
    this.adresseErrors = collectErrors(this.testForm1.controls.adresseGroup);
    this.testForm1.markAllAsTouched();
    if (this.testForm1.invalid) {
      console.log('Formularen er ugyldig.');
      printErrors(this.testForm1);
      return;
    }
    console.log('Form valid. Value:', this.testForm1.value);
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
