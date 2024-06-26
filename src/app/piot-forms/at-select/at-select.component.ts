import { KeyValue } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { SingleFieldBaseClass } from '../base-classes/single-field-base';

@Component({
  selector: 'at-select',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './at-select.component.html',
  styleUrl: './at-select.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtSelectComponent extends SingleFieldBaseClass {
  @Input() label: string = '';
  @Input() enableEmptyOption: boolean = false;
  @Input() items: KeyValue<any, string>[] = [];

  compareFn(v1: string, v2: string): boolean {
    return v1 === v2;
  }
}
