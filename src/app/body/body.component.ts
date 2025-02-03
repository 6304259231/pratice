import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
// import { AsideComponent } from '../aside/aside.component';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone : true,
  imports: [CommonModule , MatIconModule, MatDividerModule, MatButtonModule, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  data: any;
  ipText : any;

  constructor(private commonservice : CommonService){
      this.data = this.commonservice.data;
  };

  addtask(){
    this.commonservice.data.push({
      name : this.ipText,
      status : "Pending"
    })
  }

  status : string = "all";
 
  statusUpdate (status:string) {
    this.status = status;
  }

  // myObersvable = new Observable((observer)=>{
  //   observer.next(1);
  //   setTimeout(()=>{
  //     observer.next(2);
  //   }, 1000);
  //   setTimeout(()=>{
  //     observer.next(3);
  //   }, 1000);

  //   setTimeout(()=>{
  //     observer.error("pumkaaaaaaa")
  //   }, 2000)
  // });

  ngOnInit(){
  //   console.log("ng on body called");
  //   console.log(this.myObersvable)
  //   this.myObersvable.subscribe(
  //     (data)=>{
  //      console.log(data);
  //     },
  //     (error)=>{
  //       console.log(error?.message)
  //     }
  // )
   }
}
