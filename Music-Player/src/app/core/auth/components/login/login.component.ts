import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Buttons } from '@models/enums/buttons.enum';
import { Titles } from '@models/enums/titles.enum';
import { take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

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
    this.auth.login(this.loginForm.value).pipe(take(1)).subscribe();
  }
}
