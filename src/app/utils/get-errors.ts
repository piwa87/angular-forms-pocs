import { ValidationErrors } from '@angular/forms';
import { KnownValidationErrors } from '../custom-controls/custom-control-base/custom-vallidators';

export function getErrorMessage(
  errors: ValidationErrors | null,
  fc: string
): string | null {
  console.log('incoming errors', errors);

  if (errors) {
    console.log('incoming errors', errors);
    const errorList = errors?.[fc];
    console.log('errorList', errorList);

    const code = errorList?.code;
    console.log('code', code);

    const xo = getErrorMessageByCode(errorList.key);
    console.log('xo', xo);
  }
  return null;
}

export function getErrorMessageByCode(errorCode: string): string {
  const knownError = KnownValidationErrors.find(
    (error) => error.code === errorCode
  );
  return knownError ? knownError.message : 'Unknown error';
}
