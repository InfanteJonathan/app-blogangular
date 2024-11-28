import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  token: string | null = null;
  email: string | null = null;
  isAuthenticated: boolean = false;
  private authStatusSub!: Subscription;
  isLoading: boolean = true;

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    this.updateAuthStatus();

    // Suscríbete a los cambios del estado de autenticación
    this.authStatusSub = this.service.getAuthStatusListener().subscribe(this.updateAuthStatus.bind(this));
  }

  private updateAuthStatus(isAuthenticated: boolean = this.service.isAuthenticate()): void {
    this.isAuthenticated = isAuthenticated;
    this.token = this.isAuthenticated ? this.service.getToken() : null;
    this.email = this.token ? this.service.getEmailFromToken(this.token) : null;
    this.isLoading = false; // Cambia el estado de carga
  }

  onLogout(event: Event): void {
    event.preventDefault();
    this.service.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.authStatusSub?.unsubscribe();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
