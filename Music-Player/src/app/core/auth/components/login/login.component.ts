import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Buttons } from '@models/enums/buttons.enum';
import { take } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Titles } from '@models/enums/titles.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  titleText: string = Titles.LOGIN;
  buttonText: string = Buttons.LOGIN;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService) {}

  onSubmit() {
    console.log(this.loginForm.value);

    this.auth.login(this.loginForm.value).pipe(take(1)).subscribe();
  }
}
