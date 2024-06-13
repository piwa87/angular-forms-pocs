import { AbstractControl } from '@angular/forms';

export const updateFormControlTree = (
  abstractControl: AbstractControl
): void => {
  const forEachChildControl = (
    control: AbstractControl,
    callbackFunction: (abstractControl: AbstractControl) => void
  ): void => {
    const childControls = (
      control as AbstractControl & { controls?: AbstractControl[] }
    ).controls;

    if (!childControls) {
      return;
    }

    if (typeof childControls === 'object') {
      const extractedChildControls: AbstractControl[] =
        Object.values(childControls);

      extractedChildControls.forEach((childControl) => {
        callbackFunction(childControl);
      });
    }
  };

  forEachChildControl(abstractControl, (control: AbstractControl) =>
    updateFormControlTree(control)
  );
  abstractControl.markAsTouched();
  console.log('updateFormControlTree');
  abstractControl.updateValueAndValidity({ onlySelf: true, emitEvent: true });
};

export const validateFormControlTree = (
  abstractControl: AbstractControl
): void => {
  const forEachChildControl = (
    control: AbstractControl,
    callbackFunction: (abstractControl: AbstractControl) => void
  ): void => {
    const childControls = (control as AbstractControl & { controls?: any })
      .controls;

    if (!childControls) {
      return;
    }

    if (typeof childControls === 'object') {
      const extractedChildControls: AbstractControl[] =
        Object.values(childControls);

      extractedChildControls.forEach((childControl) => {
        callbackFunction(childControl);
      });
    }
  };

  forEachChildControl(abstractControl, (control: AbstractControl) =>
    validateFormControlTree(control)
  );
  abstractControl.markAsTouched();
  abstractControl.updateValueAndValidity();
};

// // Validate the entire form tree
// validateFormControlTree(myForm);
