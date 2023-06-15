import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service'; // <-- import the login service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any = FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.loginService.login(username, password).subscribe(
      response => {
        console.log(response);
        // handle successful login
      },
      error => {
        console.log(error);
        // handle login error
      }
    );
  }
}
