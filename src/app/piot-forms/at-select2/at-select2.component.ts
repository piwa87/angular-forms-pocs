import { KeyValue } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import { MaterialModule } from '../../material-module';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CustomControlSingleBaseDirective } from '../../custom-controls/custom-control-base/custom-control-single-base.directive';

@Component({
  selector: 'at-select2',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
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
export class AtSelect2Component extends CustomControlSingleBaseDirective {
  @Input() label: string = '';
  @Input() enableEmptyOption: boolean = false;
  @Input() items: KeyValue<any, string>[] = [];

  compareFn(v1: string, v2: string): boolean {
    return v1 === v2;
  }
}
