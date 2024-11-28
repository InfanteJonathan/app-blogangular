import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MainComponent } from './components/main/mainlist/mainlist.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MainComponent,
    NavbarComponent,
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    RouterModule],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-blogangular';
}
