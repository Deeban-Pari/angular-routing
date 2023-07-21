import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName: string | null = null;
  constructor() {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.userName = user.userName;
      console.log('User Name:', this.userName);
    }
  }
  ngOnInit(): void {
    // this.name = this.auth.uName;
    // console.log(this.name);
  }
}
