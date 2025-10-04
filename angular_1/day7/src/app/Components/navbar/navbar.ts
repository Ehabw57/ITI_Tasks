import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  loginStatus!: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedAsObservable.subscribe((obs) => (this.loginStatus = obs));
  }
  logout() {
    this.authService.logout();
  }
}
