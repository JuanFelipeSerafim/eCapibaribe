import { Component, Input, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    usernameInput!: HTMLInputElement | null;
    passwordInput!: HTMLInputElement | null;
    textError!: HTMLParagraphElement | null;

    username!: FormControl<string | null>;
    password: FormControl<string | null>;
    form: FormGroup;

    constructor(private readonly fb: FormBuilder) {
        this.username = this.fb.control('', [Validators.required]);
        this.password = this.fb.control('', [Validators.required]);
        this.form = this.fb.nonNullable.group({
            username: this.username,
            password: this.password,
        });
    }

    ngOnInit() {
        this.usernameInput = document.querySelector('input[name="username"]');
        this.passwordInput = document.querySelector('input[name="password"]');
        this.textError = document.querySelector('.login-error-paragraph');
    }

    countError = 0;

    loginError(mensagem: string) {
        this.usernameInput!.style.borderColor = 'red';
        this.passwordInput!.style.borderColor = 'red';
        this.textError!.textContent = mensagem;
        this.textError!.style.display = 'block';
        alert(mensagem);
        this.countError++;
        console.log(this.countError);
    }

    doLogin() {
        if (this.form.invalid) {
            this.loginError('Username or Password is empty');
            return false;
        }
        if (
            this.username.value === 'admin' &&
            this.password.value === 'admin'
        ) {
            alert('Login Successfull');
            return true;
        } else {
            this.loginError('Username or Password is incorrect');
            alert('Login Failed');
            return false;
        }
    }
}
