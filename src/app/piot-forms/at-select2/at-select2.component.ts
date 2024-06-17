import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CustomSingleNewBase } from '../../custom-controls/custom-control-base/custom-single-new';

@Component({
  selector: 'at-select-2',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './at-select2.component.html',
  styleUrl: './at-select2.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtSelect2Component),
      multi: true,
    },
  ],
})
export class AtSelect2Component extends CustomSingleNewBase {
  @Input() label: string = '';
  @Input() enableEmptyOption: boolean = false;
  @Input() items: KeyValue<any, string>[] = [];

  compareFn(v1: string, v2: string): boolean {
    return v1 === v2;
  }
}
