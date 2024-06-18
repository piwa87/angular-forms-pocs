import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Quantity2Component } from '../custom-controls/quantity2/quantity2.component';
import { CannotBeNegativeValidator } from '../custom-controls/custom-control-base/custom-vallidators';
import {
  Person2ControlComponent,
  Person2Form,
} from '../custom-controls/person2-control/person2-control.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AtFormEmailComponent } from '../piot-forms/at-form-email/at-form-email.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AtFormEmailComponent,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    Person2ControlComponent,
    Quantity2Component,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fb = inject(FormBuilder);

  fg = this.fb.group({
    // personInfo: this.fb.group({
    //   name: ['', Validators.required],
    //   surname: [''],
    // }),
    personInfo: Person2Form,
    quantity: [0, [Validators.max(8), CannotBeNegativeValidator]],
    email: ['', [Validators.required, Validators.email]],
  });

  onTouchClick() {
    console.log('onTouchClick');

    this.fg.markAllAsTouched();
  }

  onSubmit() {
    console.log('personInfo:', this.fg.controls.personInfo.value);

    this.fg.markAllAsTouched();
    console.log(this.fg);

    console.group('personInfo');
    console.log('value:', this.fg.controls.personInfo.value);
    console.log('valid:', this.fg.controls.personInfo.valid);
    console.groupEnd();

    console.group('quantity');
    console.log('value:', this.fg.controls.quantity.value);
    console.log('valid:', this.fg.controls.quantity.valid);
    console.groupEnd();

    console.group('fg');
    console.log('value:', this.fg.value);
    console.log('valid:', this.fg.valid);
    console.log('errors:', this.fg.errors);

    console.groupEnd();
  }
}
