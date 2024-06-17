import { KeyValue } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MaterialModule } from '../../material-module';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

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
export class AtSelectComponent {
  // parentForm = inject(FormGroupDirective);

  @Input({ required: true }) fc: string = '';

  @Input() label: string = '';
  @Input() enableEmptyOption: boolean = false;
  @Input() items: KeyValue<any, string>[] = [];

  compareFn(v1: string, v2: string): boolean {
    return v1 === v2;
  }
}
