import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Buttons } from '@models/enums/buttons.enum';
import { SignUp } from '@models/interfaces/user.interface';
import { take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  buttonText: string = Buttons.SIGNUP;
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z]+/),
    ]),
    lastName: new FormControl('', [Validators.pattern(/^[A-Z]+/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+$/),
    ]),
    role: new FormControl('user'),
  });

  constructor(private auth: AuthService) {}

  onSubmit(): void {
    const user: SignUp = this.userForm.value;
    this.auth.signUp(user).pipe(take(1)).subscribe();
  }
}
