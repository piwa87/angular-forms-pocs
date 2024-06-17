import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorViewerComponent } from '../error-viewer/error-viewer.component';
import { CustomControlComplexBaseDirective } from '../custom-control-base/custom-control-complex-base.directive';
import {
  updateFormControlTree,
  validateFormControlTree,
} from '../custom-control-base/update-form-control-tree';

@Component({
  selector: 'app-person2-control',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, ErrorViewerComponent],
  templateUrl: './person2-control.component.html',
  styleUrl: './person2-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: Person2ControlComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: Person2ControlComponent,
    },
  ],
})
export class Person2ControlComponent
  extends CustomControlComplexBaseDirective
  implements OnInit
{
  onChange = (value: any) => {};
  // override fg = this.fb.group({
  //   name: ['hello', [Validators.minLength(4)]],
  //   surname: ['hello', [Validators.minLength(4)]],
  // });

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.fg.markAllAsTouched = () => {
      updateFormControlTree(this.fg);
      validateFormControlTree(this.fg);
    };
  }

  onTouchedAndChange() {
    this.onTouched();
    this.onChange(this.fg.value);
  }
}

export const Person2Form = new FormGroup({
  navn: new FormControl<string | null>(null, [Validators.required]),
  rolle: new FormControl<string | null>(null, [Validators.required]),
});

// export interface Person2 {
//   navn: FormControl<string | null>;
//   rolle: FormControl<string | null>;
// }
