import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
//import { AsideComponent } from './aside/aside.component';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent , FormsModule  , RouterOutlet, AsideComponent , WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
