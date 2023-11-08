import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  // constructor(private router: Router, private auth: AuthService) {}
  constructor(private router: Router, private auth: AuthService) {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.userName = user.userName;
      console.log('User Name:', this.userName);
    }
  }
  public onLogoutClick() {
    // this.router.navigate(['/login']);
    this.auth.logout();
  }

  ngOnInit(): void {}

  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
