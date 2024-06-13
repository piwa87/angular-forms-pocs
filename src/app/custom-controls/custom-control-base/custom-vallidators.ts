import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CannotBeNegativeValidator(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  const quantity = control.value;
  if (quantity < 0) {
    return {
      [ValidationErrorCode.cannotBeNegative]: { quantity },
    };
  }
  return null;
}

export function MustContainNameValidator(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  const nameString = control.value;
  if (stringIsEmpty(nameString)) {
    return {
      [ValidationErrorCode.mustContainName]: { nameString },
    };
  }
  return null;
}

export enum ValidationErrorCode {
  max = 'max',
  cannotBeNegative = 'cannotBeNegative',
  mustContainName = 'mustContainName',
  required = 'required',
  minlength = 'minlength',
}

export const KnownValidationErrors: {
  code: ValidationErrorCode;
  message: string;
}[] = [
  { code: ValidationErrorCode.max, message: 'Værdien er for høj' },
  {
    code: ValidationErrorCode.cannotBeNegative,
    message: 'Værdien må ikke være negativ',
  },
  {
    code: ValidationErrorCode.mustContainName,
    message: 'Der skal indtastes et navn',
  },
  { code: ValidationErrorCode.required, message: 'Feltet er påkrævet' },
  {
    code: ValidationErrorCode.minlength,
    message: 'Minimum længde er ikke opnået',
  },
];

export function stringIsEmpty(
  stringToTest: string | null | undefined
): boolean {
  if (!stringToTest) {
    return true;
  }

  if (stringToTest === '') {
    return true;
  }
  return false;
}
