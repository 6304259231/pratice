import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DummyService} from '../app.dummy.service'


@Component({
  selector: 'app-login',
  standalone : true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // just checking event binding (1 way binding --> data from (HTML - TS));

  constructor(private dummy : DummyService) {}

  email : string = "";
  password : string = "";
  city : string = "default";
  dummyText : any = "";

  getUserEmail(e:any){
    this.email = e.target.value;
  };

  getUserPassword(e: any){
    this.password = e.target.value;
   }

  onSubmit(){
    const data : object = {
      email : this.email , password : this.password
    }
    console.log(data);
  }

  ngOnInIt(){
    this.dummyText = this.dummy.addText;
  }

  // 2 way binding by ---> [(ngModerl)] = "var(ts)"
}
