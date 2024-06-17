import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'at-radio-group',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule, CommonModule, MatRadioModule],
  templateUrl: './at-radio-group.component.html',
  styleUrl: './at-radio-group.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtRadioGroupComponent {
  // parentForm = inject(FormGroupDirective);

  @Input({ required: true }) fc: string = '';

  @Input() label?: string;
  @Input({ required: true }) options: RadioButtonModel[] = [];
  @Input() readOnly: boolean = false;
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
}

export interface RadioButtonModel {
  label?: string;
  value?: string | boolean | null;
}