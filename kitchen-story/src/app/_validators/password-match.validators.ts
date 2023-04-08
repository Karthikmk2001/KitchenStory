import { AbstractControl } from '@angular/forms';

// Custom Validator
export function PasswordMatch(
  controlName: string,
  matchingControlName: string
) {
  return (group: AbstractControl) => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);
    if (!control || !matchingControl) return null;

    // Returns if another validator has already found an error on the matching control.
    if (matchingControl.errors && !matchingControl.errors['passwordMatch'])
      return null;

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}
