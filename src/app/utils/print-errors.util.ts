import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export const printErrors = (
  control: AbstractControl,
  path: string = ''
): void => {
  if (control instanceof FormGroup) {
    Object.keys(control.controls).forEach((key) => {
      const childControl = control.get(key);
      if (childControl) {
        printErrors(childControl, `${path}${key}.`);
      }
    });
  } else if (control instanceof FormArray) {
    control.controls.forEach((childControl, index) => {
      printErrors(childControl, `${path}${index}.`);
    });
  } else if (control instanceof FormControl) {
    if (control.errors) {
      console.log(`${path} has following errors`, control.errors);
    }
  }
};
