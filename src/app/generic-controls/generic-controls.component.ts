import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Quantity2Component } from '../custom-controls/quantity2/quantity2.component';
import { CannotBeNegativeValidator } from '../custom-controls/custom-control-base/custom-vallidators';

@Component({
  selector: 'app-generic-controls',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    Quantity2Component,
  ],
  templateUrl: './generic-controls.component.html',
  styleUrl: './generic-controls.component.scss',
})
export class GenericControlsComponent implements OnInit {
  fb = inject(FormBuilder);
  fg: FormGroup = this.fb.group({});

  ControlTypes = KnownControlTypes;

  stringControl: GenericFormControl = {
    label: 'String',
    type: KnownControlTypes.string,
    name: 'first',
    initialValue: 'First',
    validators: [],
  };
  selectControl: GenericFormControl = {
    label: 'Select',
    type: KnownControlTypes.select,
    name: 'select',
    initialValue: 'Djon',
    validators: [],
    options: [
      { value: 'One', displayValue: '1' },
      { value: 'Two', displayValue: '2' },
    ],
  };

  quantity2Control: GenericFormControl = {
    label: 'Quantity2',
    type: KnownControlTypes.quantity2,
    name: 'quantity2',
    initialValue: 0,
    validators: [Validators.max(10), CannotBeNegativeValidator],
  };

  @Input({ required: true }) genericControls: GenericFormControl[] = [
    this.stringControl,
    this.selectControl,
    this.quantity2Control,
  ];
  
  ngOnInit() {
    this.genericControls.forEach((gControl) => {
      const newControl = this.fb.control(gControl.initialValue, {
        validators: gControl.validators,
      });
      this.fg.addControl(gControl.name, newControl);
    });
  }

  onSubmit() {
    console.log('this.fg.value', this.fg.value);
  }

  onClick() {
    console.log(this.fg);
  }
}

interface GenericFormControl {
  label: string;
  name: string;
  type: KnownControlTypes;
  initialValue: string | number | ValueAndDisplay;
  validators: ValidatorFn[];
  options?: ValueAndDisplay[];
}

interface ValueAndDisplay {
  value: string;
  displayValue: string;
}

enum KnownControlTypes {
  string,
  number,
  checkbox,
  select,
  radiogroup,
  quantity,
  quantity2,
}
