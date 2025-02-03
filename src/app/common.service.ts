import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { };

  data : any = [
    {
      name : "Do gym today",
      status : "pending"
    },{
      name : "Do pay to begger",
      status : "completed"
    },{
      name : "yoga",
      status : "completed"
    },{
      name : "payment to EMI",
      status : "pending"
    }
  ]

}
