import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {}
  title : string = "Ang19.";  // STRING interpolation --> 1 way data binding [ ts - html]
  
  flex : Object = {   // Style binding -- [style] = "{ color : clr(ts-variable)}"
    display : "flex",
    justifyContent : "center",
    gap :"2rem",
    color : "green",
    
  }

  isAuth : any = "vishnu";


  dt = new EventEmitter();

  passData(){
   this.dt.emit(this.isAuth);
  }
  
  
}
