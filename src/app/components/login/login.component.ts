import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  credentials: any = {};
  // loginForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  // });
  constructor(private auth: AuthService, private router: Router) {}
  register() {
    this.auth.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully!', response);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      (response: any) => {
        console.log('User logged in successfully!', response);
        // Save the token in local storage
        localStorage.setItem('token', response.token);
        // Save user details (userName and email) in local storage
        localStorage.setItem('userDetails', JSON.stringify(response));
        // Add logic to handle successful login
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.error('Error logging in:', error);
        // Add logic to handle login error
      }
    );
  }
  ngOnInit(): void {
    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['admin']);
    // }
    // this.user = this.credentials.userName;
    // console.log(this.user);
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.auth.login(this.loginForm.value).subscribe(
  //       (result) => {
  //         localStorage.setItem('token', result.token);
  //         this.router.navigate(['/admin']);
  //       },
  //       (err: Error) => {
  //         alert(err.message);
  //       }
  //     );
  //   }
  // }
}
