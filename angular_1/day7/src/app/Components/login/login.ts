import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserApi } from '../../Services/user-api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private userApi: UserApi, private router: Router, private authService: AuthService) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Please enter both email and password');
      return;
    }

    this.isLoading = true;

    this.userApi.comparePassword(this.email, this.password).subscribe({
      next: (isValid: boolean) => {
        this.isLoading = false;
        if (isValid) {
          this.authService.login();
          this.router.navigate(['/home']);
        } else {
          alert('Invalid email or password. Please try again.');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login error:', error);
        alert('sorry an error happend');
      },
    });
  }
}
