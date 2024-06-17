import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AddressAnguniComponent } from '../custom-controls/adress-anguni/adress-anguni.component';
import { Quantity2Component } from '../custom-controls/quantity2/quantity2.component';
import {
  CannotBeNegativeValidator,
  MustContainNameValidator,
} from '../custom-controls/custom-control-base/custom-vallidators';
import { ErrorViewerComponent } from '../custom-controls/error-viewer/error-viewer.component';
import { Person2ControlComponent } from '../custom-controls/person2-control/person2-control.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    Quantity2Component,
    AddressAnguniComponent,
    ErrorViewerComponent,
    Person2ControlComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fb = inject(FormBuilder);

  fg = this.fb.group({
    personInfo: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.minLength(5), Validators.required]],
    }),
    adress: [null],
    quantity: [0, [Validators.max(8), CannotBeNegativeValidator]],
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

    console.group('adress');
    console.log('value:', this.fg.controls.adress.value);
    console.log('valid:', this.fg.controls.adress.valid);
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
