import { Directive, Input } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { PasswordMatch } from './password-match.validators';

@Directive({
  selector: '[passwordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    },
  ],
})
export class PasswordMatchDirective implements Validator {
  @Input('passwordMatch')
  passwordMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors | null {
    return PasswordMatch(
      this.passwordMatch[0],
      this.passwordMatch[1]
    )(formGroup);
  }
}
