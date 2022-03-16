import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  AsyncValidatorFn,
} from '@angular/forms';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorsService {
  constructor(private authService: AuthService) {}

  public matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

  public existValidator(field: string): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      if (control.value === '') return Promise.resolve(null);
      const exist: Promise<string> = new Promise((resolve) => {
        this.authService.checkExist(field, control.value).subscribe((res) => {
          resolve(res);
        });
      });

      return exist.then((res) => {
        return res === 'true' ? { exist: true } : null;
      });
    };
  }
}
