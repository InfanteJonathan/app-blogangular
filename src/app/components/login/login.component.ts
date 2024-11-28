import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(event: Event): void{
    event.preventDefault();
    console.log('Email:', this.email); console.log('Password:', this.password);
    this.authService.login(this.email, this.password).subscribe(
      res => {
        console.log('Login successful: ',res);
        this.router.navigate(['']);
      },
      error =>{
         console.log('Login failed:',error);
      }
    );
  }
}
