import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CustomControlSingleBaseDirective } from '../custom-control-base/custom-control-single-base.directive';
import { ErrorViewerComponent } from '../error-viewer/error-viewer.component';
import {
  ValidationErrorCode,
  stringIsEmpty,
} from '../custom-control-base/custom-vallidators';

@Component({
  selector: 'app-person-control',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, ErrorViewerComponent],
  templateUrl: './person-control.component.html',
  styleUrl: './person-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PersonControlComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PersonControlComponent,
    },
  ],
})
export class PersonControlComponent
  extends CustomControlSingleBaseDirective
  implements OnChanges
{
  fb = inject(FormBuilder);
  @Input() legend: string = 'This is Legend';
  @Input() parentSubmitted: boolean = false;

  fg = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    surName: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor() {
    super();
    this.setValidationFunction(this.noNamesEmpty());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    const parentSubChange = changes["parentSubmitted"];
    if (parentSubChange) {
      if (parentSubChange.firstChange) {
        return;
      }

      if (parentSubChange.currentValue) {
        console.log("parent submitted");
        
      }
      this.fg.markAllAsTouched()
    }
  }

  noNamesEmpty(): Function {
    return () => {
      const firstNameControl = this.fg.controls.firstName;
      const firstName = firstNameControl.value;
      const firstNameTouched = ((firstNameControl.touched) || (this.fg.touched) || (this.parentSubmitted));
      console.log('firtNameTouched', firstNameTouched);

      const surNameControl = this.fg.controls.surName;
      const surName = surNameControl.value;
      const surNameTouched = surNameControl.touched || this.fg.touched;

      const missing: string[] = [];

      if (firstNameTouched && stringIsEmpty(firstName)) {
        missing.push('firstName');
      }
      if (surNameTouched && stringIsEmpty(surName)) {
        missing.push('surName');
      }

      if (missing.length === 0) {
        return;
      }

      return { [ValidationErrorCode.mustContainName]: { firstName } };
    };
  }

  onTouchedAndChange() {
    this.onTouched();
    this.onChange(this.fg.value);
  }
}
