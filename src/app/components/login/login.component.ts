import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  showPassword: boolean = false;
  @ViewChild('myForm') myForm!: NgForm;
  user: any = { userName: '', email: '', password: '' };
  credentials: any = { userName: '', email: '', password: '' };
  // loginForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  // });
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  register() {
    // Check if the email is valid before proceeding with registration
    if (!this.isValidEmail(this.user.email)) {
      this.toastr.error('Invalid email format!', 'Error');
      return; // Return early if the email is invalid
    }

    // Check if the password is strong before proceeding with registration
    if (!this.isStrongPassword(this.user.password)) {
      this.toastr.error(
        'Password should be at least 8 characters long and contain a mix of uppercase, lowercase, and numbers.',
        'Weak Password'
      );
      return; // Return early if the password is weak
    }
    this.auth.register(this.user).subscribe(
      (response) => {
        this.toastr.success('User Registered Successfully', 'Success');
        console.log('User registered successfully!', response);
      },
      (error) => {
        console.error('Error registering user:', error);
        this.toastr.error('Cannot register the user');
      }
    );
    this.myForm.resetForm();
  }
  isValidEmail(email: string): boolean {
    // Regular expression to validate email
    const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  isStrongPassword(password: string): boolean {
    // Password should be at least 8 characters long and contain a mix of uppercase, lowercase, and numbers
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
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
        // console.error('Error logging in:', error);
        this.toastr.error('Invalid Usernme or Password');
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

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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
