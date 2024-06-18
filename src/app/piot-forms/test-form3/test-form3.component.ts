import { CommonModule, KeyValue } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtSelectComponent } from '../at-select/at-select.component';
import { MaterialModule } from '../../material-module';
import {
  AtFormEmailComponent,
  EmailForm,
} from '../at-form-email/at-form-email.component';
import {
  AtRadioGroupComponent,
  RadioButtonModel,
} from '../at-radio-group/at-radio-group.component';
import {
  AtFormNavnRolleComponent,
  NavnRolleForm,
} from '../at-form-navn-rolle/navn-rolle.component';
import { printErrors } from '../../utils/print-errors.util';
import { AtSelect2Component } from '../at-select2/at-select2.component';

@Component({
  selector: 'app-test-form3',
  standalone: true,
  imports: [
    AtFormEmailComponent,
    AtFormNavnRolleComponent,
    AtRadioGroupComponent,
    AtSelectComponent,
    AtSelect2Component,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './test-form3.component.html',
})
export class TestForm3Component {
  fb = inject(FormBuilder);

  testForm3 = this.fb.group({
    yndlingsdyr: this.fb.control<string | null>('', [Validators.required]),
    two: this.fb.control<string | null>(null, Validators.required),
    emailGrim: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.email,
    ]),
    emailPaen: EmailForm,
    favoritFarve: this.fb.control<string>('green', Validators.required),
    person23: NavnRolleForm,
  });

  kaeledyrsItems: KeyValue<any, string>[] = [
    { key: 1, value: 'Løve' },
    { key: 2, value: 'Hest' },
    { key: 3, value: 'Giraf' },
  ];

  favoritFarveItems: RadioButtonModel[] = [
    { label: 'Grøn', value: 'green' },
    { label: 'Rød', value: 'red' },
    { label: 'Gul', value: 'yellow' },
    { label: 'Blå', value: 'blue' },
  ];

  onSubmit() {
    if (this.testForm3.invalid) {
      console.log('Formen er ugyldig');
      printErrors(this.testForm3);
      return;
    }
    console.log('this.testForm3.value: ', this.testForm3.value);
    console.log('this.testForm3.valid: ', this.testForm3.valid);
    console.log('this.testForm3.errors: ', this.testForm3.errors);
  }
}
