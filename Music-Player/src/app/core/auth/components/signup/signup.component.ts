import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUp } from '@models/interfaces/user.interface';
import { take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z]+/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z]+/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+$/),
    ]),
    role: new FormControl('user'),
  });

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const user: SignUp = this.userForm.value;
    console.log(user);

    this.auth.signUp(user).pipe(take(1)).subscribe();
  }
}
