import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-wrapper',
  imports: [RouterOutlet, AsideComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {

}
