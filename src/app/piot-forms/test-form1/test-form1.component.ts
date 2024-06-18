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
import { AtFormEmailComponent } from '../at-form-email/at-form-email.component';
import { AtFormNavnRolleTwoComponent } from '../at-form-navn-rolle-two/at-form-navn-rolle-two.component';
import { printErrors } from '../../utils/print-errors.util';
import {
  AtFormEmailTwoComponent,
  EmailFormTwo,
} from '../at-form-email-two/at-form-email-two.component';
import { MustContainNameValidator } from '../../custom-controls/custom-control-base/custom-vallidators';

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
  email2: FormControl<string | null>;
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
    AtFormEmailTwoComponent,
    AtFormNavnRolleTwoComponent,
  ],
  templateUrl: './test-form1.component.html',
})
export class TestForm1Component implements OnInit {
  fb: FormBuilder = inject(FormBuilder);

  testForm1: FormGroup<MainForm> = this.fb.group({
    navnRolle100: this.fb.group({
      navn: ['', [Validators.required, Validators.minLength(4)]],
      rolle: [''],
    }),
    // navnRolle100: NavnRolleForm,
    navnRolle2: this.fb.group({
      navn: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(5),
        ]),
      ],
      rolle: ['', [Validators.minLength(5), Validators.required]],
    }),
    adresseGroup: DanskAdresseForm,
    email: ['', [Validators.email, Validators.required]],
    email2: EmailFormTwo,
  }) as FormGroup<MainForm>;

  navnRolleErrors: ValidationErrors | null = null;
  adresseErrors: ValidationErrors | null = null;

  ngOnInit(): void {
    this.testForm1.controls.navnRolle100.valueChanges.subscribe((value) => {
      this.navnRolleErrors = collectErrors(
        this.testForm1.controls.navnRolle100
      );
    });
    this.testForm1.controls.adresseGroup.valueChanges.subscribe((value) => {
      this.adresseErrors = collectErrors(this.testForm1.controls.adresseGroup);
    });
  }

  onSubmit(): void {
    this.navnRolleErrors = collectErrors(this.testForm1.controls.navnRolle100);
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
