import { CommonModule, KeyValue } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AtSelectComponent } from '../at-select/at-select.component';
import { MaterialModule } from '../../material-module';
import { AtFormEmailComponent } from '../at-form-email/at-form-email.component';
import {
  AtRadioGroupComponent,
  RadioButtonModel,
} from '../at-radio-group/at-radio-group.component';
import { AtFormNavnRolleComponent } from '../at-form-navn-rolle/navn-rolle.component';
import { printErrors } from '../../utils/print-errors.util';
import { AtSelect2Component } from '../at-select2/at-select2.component';

@Component({
  selector: 'app-test-form3',
  standalone: true,
  imports: [
    AtFormEmailComponent,
    AtFormNavnRolleComponent,
    AtRadioGroupComponent,
    AtSelect2Component,
    AtSelectComponent,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './test-form3.component.html',
  styleUrl: './test-form3.component.scss',
})
export class TestForm3Component {
  fb = inject(FormBuilder);

  testForm3: FormGroup = this.fb.group({
    yndlingsdyr: this.fb.control<string | null>('', [Validators.required]),
    two: this.fb.control<string>(''),
    emailYoyo: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    favoritFarve: this.fb.control<string>('yellow', Validators.required),
    person2: this.fb.group({
      navn: this.fb.control<string | null>(null, Validators.required),
      rolle: this.fb.control<number | null>(null, Validators.required),
    }),
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
    console.log('this.fg.value: ', this.testForm3.value);
    console.log('this.fg.valid: ', this.testForm3.valid);
    console.log('this.fg.errors: ', this.testForm3.errors);

    // const myControls: { [key: string]: any } = this.testForm3.controls;
    // for (const key in myControls) {
    //   const thisControl = myControls[key] as FormControl;
    //   console.log(`${key} has following errors`, thisControl.errors);
    // }

    printErrors(this.testForm3);
  }
}
